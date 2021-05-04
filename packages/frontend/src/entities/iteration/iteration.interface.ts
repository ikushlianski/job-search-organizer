import { LoadingProps } from '../../common/types/loading-props.interface';

export interface IterationListState extends LoadingProps {
  iterations: IterationItemState[];
}

export interface IterationItemState extends LoadingProps {
  id: number;
  start_date: Date;
  final_date: Date;
  name: string;
}
