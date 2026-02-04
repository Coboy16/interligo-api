import { User as UserInterface } from './index';

declare global {
  namespace Express {
    interface Request {
      userId?: string;
      username?: string;
      user?: Omit<UserInterface, 'password'>; // Optional: to store the fetched user object
    }
  }
}
