export const authService = {
  getToken(): string | null {
    return localStorage.getItem('accessToken');
  },
  setToken(token: string): void {
    return localStorage.setItem('accessToken', token);
  },
};
