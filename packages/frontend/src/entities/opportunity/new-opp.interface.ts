import { LoadingProps } from '../../common/types/loading-props.interface';

export interface NewOpportunityState extends LoadingProps {
  opportunity_id?: number;
  created: boolean;
}
