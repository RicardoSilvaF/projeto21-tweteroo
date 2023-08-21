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

  getTweets(page: number) {
    if (!page) {
      page = 1;
    }
    if (isNaN(page) || page < 1) {
      throw new HttpException('BAD_REQUEST', HttpStatus.BAD_REQUEST);
    }

    const perPage: number = 15
    const transformedTweets = this.tweets.map((tweet) => ({
      username: tweet.getUser().getUsername(),
      avatar: tweet.getUser().getAvatar(),
      tweet: tweet.getTweet(),
    }));
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const pagedTweets = transformedTweets.slice(startIndex, endIndex);
    
    console.log(pagedTweets)
    return pagedTweets
    
  }
}
