import { IsNotEmpty, IsString } from 'class-validator';
import { UserDto } from './user.dto';

export class TweetDto {
    user: UserDto;

    @IsNotEmpty()
    @IsString()
    tweet: string;
}
