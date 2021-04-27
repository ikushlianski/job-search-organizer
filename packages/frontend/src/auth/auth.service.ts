export const authService = {
  getToken(): string | null {
    return localStorage.getItem('accessToken');
  },
};
