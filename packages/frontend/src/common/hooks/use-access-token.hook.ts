import { useSelector } from 'react-redux';
import { getUserToken } from '../../auth/store/auth.selector';

export const useAccessToken = (): string | null => {
  return useSelector(getUserToken);
};
