import { useSelector } from 'react-redux';
import { getUserToken } from '../../auth/store/auth.selector';
import { useLocation } from 'react-router-dom';
import { SearchParams } from '../../routes/search-params.enum';

export const useAccessToken = (): string => {
  const { search } = useLocation();

  const tempToken = new URLSearchParams(search).get(SearchParams.TOKEN);
  const accessToken = useSelector(getUserToken);

  return tempToken || accessToken || '';
};
