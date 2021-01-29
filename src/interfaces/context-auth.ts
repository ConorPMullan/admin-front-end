import IUserSession from './user-session';

export default interface IAuthContext {
  userSession: IUserSession;
  updateUserSession: (userSession: IUserSession) => void;
  clearUserSession: () => void;
}
