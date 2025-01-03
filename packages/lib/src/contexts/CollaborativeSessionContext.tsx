// packages/lib/src/contexts/CollaborativeSessionContext.tsx
// Maintains real-time collaborative session state, e.g. multiple users reading together.

import React, { createContext, useContext, useState, useEffect } from 'react';
import firestoreService from '../services/firestoreService'; // Firestore service for real-time data
import { useAuth } from './AuthContext'; // Access the logged-in user from authContext

interface Participant {
  id: string;
  name: string;
}

interface CollaborativeSessionData {
  sessionId: string;
  participants: Participant[];
  currentStory: string;
  progress: number;
}

interface CollaborativeSessionContextProps {
  sessionData: CollaborativeSessionData | null;
  joinSession: (sessionId: string) => Promise<void>;
  leaveSession: () => Promise<void>;
  updateProgress: (progress: number) => Promise<void>;
}

const CollaborativeSessionContext = createContext<CollaborativeSessionContextProps | undefined>(
  undefined,
);

export const CollaborativeSessionProvider: React.FC = ({ children }) => {
  const [sessionData, setSessionData] = useState<CollaborativeSessionData | null>(null);
  const { user } = useAuth();

  // Subscribe to real-time updates whenever a session is active
  useEffect(() => {
    if (!sessionData?.sessionId) return;

    const unsubscribe = firestoreService.subscribeToSession(sessionData.sessionId, (data) => {
      setSessionData((prev) => ({
        ...prev!,
        participants: data.participants,
        currentStory: data.currentStory,
        progress: data.progress,
      }));
    });

    // Cleanup subscription when the session changes or component unmounts
    return () => unsubscribe();
  }, [sessionData?.sessionId]);

  // User joins an existing session
  const joinSession = async (sessionId: string) => {
    if (!user) throw new Error('User must be logged in to join a session.');

    const session = await firestoreService.joinSession(sessionId, {
      id: user.id,
      name: user.name,
    });
    setSessionData(session);
  };

  // User leaves the current session
  const leaveSession = async () => {
    if (!sessionData?.sessionId || !user) return;

    await firestoreService.leaveSession(sessionData.sessionId, user.id);
    setSessionData(null);
  };

  // Update the shared reading progress in real-time
  const updateProgress = async (progress: number) => {
    if (!sessionData?.sessionId) {
      throw new Error('No active session to update progress.');
    }
    await firestoreService.updateSessionProgress(sessionData.sessionId, progress);
    setSessionData((prev) => (prev ? { ...prev, progress } : null));
  };

  return (
    <CollaborativeSessionContext.Provider
      value={{ sessionData, joinSession, leaveSession, updateProgress }}
    >
      {children}
    </CollaborativeSessionContext.Provider>
  );
};

export const useCollaborativeSession = (): CollaborativeSessionContextProps => {
  const context = useContext(CollaborativeSessionContext);
  if (!context) {
    throw new Error('useCollaborativeSession must be used within a CollaborativeSessionProvider');
  }
  return context;
};
