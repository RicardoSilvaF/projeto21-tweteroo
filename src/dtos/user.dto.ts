import { IsNotEmpty, IsString, IsUrl } from "class-validator";

export class UserDto {
    @IsNotEmpty()
    @IsString()
    username: string; 

    @IsNotEmpty()
    @IsString()
    @IsUrl()
    avatar: string;
}