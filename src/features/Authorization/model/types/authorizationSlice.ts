import type { IUser } from 'entities/User';

export interface IAuthorizationSchema {
  user: IUser | null;
}
