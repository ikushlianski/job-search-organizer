export interface User {
  email: string;
  accessToken: string;
}

export interface Auth {
  email: string | null;
  accessToken: string | null;
  authenticated: boolean;
  authenticationMessage?: string | null;
}

export interface SignInParams {
  email: string;
  password: string;
}
