import { generateTokens, verifyToken } from '../utils/token.utils';
import { AuthTokens, User as UserInterface } from '../types';
import { User } from '../models/User.model';

export class AuthService {
  async login(username: string, password: string): Promise<{ tokens: AuthTokens; user: Omit<UserInterface, 'password'> } | null> {
    const user = await User.findOne({ where: { username, password } });

    if (!user) {
      return null;
    }

    // Usar getDataValue para obtener los valores de Sequelize correctamente
    const userId = user.getDataValue('id');
    const userUsername = user.getDataValue('username');

    const payloadToGenerate = { userId, username: userUsername };
    console.log('AuthService: Login Payload before generateTokens:', payloadToGenerate);
    const tokens = generateTokens(payloadToGenerate);
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

    // Usar getDataValue para obtener los valores de Sequelize correctamente
    const userId = user.getDataValue('id');
    const userUsername = user.getDataValue('username');

    const newPayload = { userId, username: userUsername };
    console.log('AuthService: Refresh Token Payload before generateTokens:', newPayload);
    return generateTokens(newPayload);
  }

  async getUserById(userId: string): Promise<Omit<UserInterface, 'password'> | null> {
    const user = await User.findByPk(userId);
    if (!user) return null;
    
    const { password: _, ...userWithoutPassword } = user.toJSON();
    return userWithoutPassword;
  }
}