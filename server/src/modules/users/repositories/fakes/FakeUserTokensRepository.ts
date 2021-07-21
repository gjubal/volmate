import { v4 as uuid } from 'uuid';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';

import UserToken from '@modules/users/infra/typeorm/entities/UserToken';
import AppError from '@shared/errors/AppError';

class FakeUserTokensRepository implements IUserTokensRepository {
  private userTokens: UserToken[] = [];

  public async generate(user_id: string): Promise<UserToken> {
    const userToken = new UserToken();

    Object.assign(userToken, {
      id: uuid(),
      token: uuid(),
      user_id,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.userTokens.push(userToken);

    return userToken;
  }

  public async findByToken(token: string): Promise<UserToken> {
    const userToken = await this.userTokens.find(tkn => tkn.token === token);

    if (!userToken) {
      throw new AppError('Unable to find user token');
    }

    return userToken;
  }
}

export default FakeUserTokensRepository;
