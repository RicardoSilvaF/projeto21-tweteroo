import { IsNotEmpty, IsString } from 'class-validator';

export class TweetDto {
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    tweet: string;
}
