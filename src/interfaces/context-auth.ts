import IUserSession from './user-session';

export default interface IAuthContext {
  isAuthLoading: boolean;
  userSession: IUserSession;
  updateUserSession: (userSession: IUserSession) => void;
  clearUserSession: () => void;
}
