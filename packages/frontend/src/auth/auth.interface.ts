export interface User {
  email: string;
  accessToken: string;
}

export interface Auth {
  authenticated: boolean;
  accessToken: string;
}

export interface SignInParams {
  email: string;
  password: string;
}
