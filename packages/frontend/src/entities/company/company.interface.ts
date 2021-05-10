import { LoadingProps } from '../../common/types/loading-props.interface';

export interface Company {
  id: number;
  name: string;
  address_1: string;
  address_2: string;
}

export interface CompanyListState extends LoadingProps {
  companies: Company[];
}
