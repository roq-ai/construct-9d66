import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface IssueInterface {
  id?: string;
  description: string;
  status: string;
  type: string;
  reported_by: string;
  assigned_to: string;
  created_at?: any;
  updated_at?: any;

  user_issue_reported_byTouser?: UserInterface;
  user_issue_assigned_toTouser?: UserInterface;
  _count?: {};
}

export interface IssueGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  status?: string;
  type?: string;
  reported_by?: string;
  assigned_to?: string;
}
