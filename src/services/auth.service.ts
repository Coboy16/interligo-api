import { generateTokens, verifyToken } from '../utils/token.utils';
import { AuthTokens, User as UserInterface } from '../types';
import { User } from '../models/User.model';

export class AuthService {
  async login(username: string, password: string): Promise<{ tokens: AuthTokens; user: Omit<UserInterface, 'password'> } | null> {
    const user = await User.findOne({ where: { username, password } });
    
    if (!user) {
      return null;
    }

    const tokens = generateTokens({ userId: user.id, username: user.username });
    const { password: _, ...userWithoutPassword } = user.toJSON();
    
    return { tokens, user: userWithoutPassword };
  }

  async refreshToken(refreshToken: string): Promise<AuthTokens | null> {
    const payload = verifyToken(refreshToken);
    
    if (!payload) {
      return null;
    }

    const user = await User.findByPk(payload.userId);
    if (!user) {
      return null;
    }

    return generateTokens({ userId: user.id, username: user.username });
  }

  async getUserById(userId: string): Promise<Omit<UserInterface, 'password'> | null> {
    const user = await User.findByPk(userId);
    if (!user) return null;
    
    const { password: _, ...userWithoutPassword } = user.toJSON();
    return userWithoutPassword;
  }
}