import type { IQueryBaseResponseResult } from 'shared/types';

export interface ILoginMutationBody {
  email: string;
  password: string;
}

export interface ILoginMutationProps {
  body: ILoginMutationBody;
}

export type TLoginMutationResult = IQueryBaseResponseResult<{
  first_name: string;
  last_name: string;
  email: string;
}>;
