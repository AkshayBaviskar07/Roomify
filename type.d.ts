export interface AuthState {
    isSignedIn: boolean;
    userName: User | null;
    userId: string | null;
}

export type AuthContext = {
    isSignedIn: boolean;
    userName: User | null;
    userId: string | null;
    refreshAuth: () => Promise<boolean>;
    signIn: () => Promise<boolean>;
    signOut: () => Promise<boolean>;
}