import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TimeEntryInterface {
  id?: string;
  user_id: string;
  start_time: any;
  end_time: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface TimeEntryGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
