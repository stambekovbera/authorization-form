export { useAuthorizationCheck } from './lib/hooks/useAuthorizationCheck';
export { Authorization } from './ui/Authorization';
export {
  authorizationReducer,
  authorizationActions,
  authorizationSelectors,
} from './model/slice/authorization.slice';
export type { IAuthorizationSchema } from './model/types/authorizationSlice';
