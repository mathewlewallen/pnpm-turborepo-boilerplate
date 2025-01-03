// packages/types/src/Auth.ts
// Data types for authentication, user objects, auth state

export interface AuthUser {
  // This interface represents a user object with the minimal fields for authentication
  id: string;
  name: string;
  email: string;
}

export interface AuthState {
  // Represents the overall state of authentication, including whether the user is logged in,
  // a token (JWT or similar), and the user data if logged in.
  isAuthenticated: boolean;
  token: string | null;
  user: AuthUser | null;
}
