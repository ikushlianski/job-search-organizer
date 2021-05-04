import { LoadingProps } from '../../common/types/loading-props.interface';

export interface InterviewListState extends LoadingProps {
  iterations: InterviewItemState[];
}

export interface InterviewItemState extends LoadingProps {
  id: number;
  date: Date;
  contact_person: string;
  meeting_link: string;
  address: string;
  opportunity_id: number;
}
