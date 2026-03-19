interface AuthState {
    isSignedIn: boolean;
    userName: User | null;
    userId: string | null;
}

type AuthContext = {
    isSignedIn: boolean;
    userName: User | null;
    userId: string | null;
    refreshAuth: () => Promise<boolean>;
    signIn: () => Promise<boolean>;
    signOut: () => Promise<boolean>;
}