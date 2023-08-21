import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UserDto } from './dtos/user.dto';
import { User } from './entities/user.entity';
import { TweetDto } from './dtos/tweet.dto';
import { Tweet } from './entities/tweet.entity';

@Injectable()
export class AppService {
  private readonly users: User[] = [];
  private readonly tweets: Tweet[] = [];

  getHealth(): string {
    return "I'm okay!";
  };

  async postSignup(NewUser: UserDto) {
    const createUser = new User(NewUser.username, NewUser.avatar);
    this.users.push(createUser);
  };

  async postTweets(NewTweet: TweetDto) {
    const username = NewTweet.username;
    const userCheck = this.users.find((user) => user.getUsername() === username);

    if (!userCheck) {
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    }

    const createTweet = new Tweet(userCheck , NewTweet.tweet);
    this.tweets.push(createTweet);
  };
}
