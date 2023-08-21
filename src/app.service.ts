import { Injectable } from '@nestjs/common';
import { UserDto } from './dtos/user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class AppService {
  private readonly users: User[] = [];

  getHealth(): string {
    return "I'm okay!";
  };

  async postSignup(NewUser: UserDto) {
    const createUser = new User(NewUser.username, NewUser.avatar);
    this.users.push(createUser);
  };
}
