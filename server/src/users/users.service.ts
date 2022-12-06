import { Injectable } from '@nestjs/common';

export type User = {
  userId: number;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'default',
      password: '123',
    },
    {
      userId: 2,
      username: 'SecondBite',
      password: '123',
    },
    {
      userId: 3,
      username: 'AxilCoffee',
      password: '123',
    },
    {
      userId: 4,
      username: 'Myer',
      password: '123',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
