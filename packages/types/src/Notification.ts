// packages/types/src/Notification.ts
// Minimal interface for application notifications

export interface Notification {
  id: string;
  type: 'info' | 'success' | 'error';
  message: string;
  timestamp: Date;
}
