import { UserSession } from '@interfaces';

export type AuthContextType = {
  userSession: UserSession;
  updateUserSession: (userSession: UserSession) => void;
  clearUserSession: () => void;
};
