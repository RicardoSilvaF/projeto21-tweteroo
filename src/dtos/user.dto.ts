import { IsNotEmpty, IsString, IsUrl } from "class-validator";

export class UserDto {
    @IsNotEmpty({message: "All fields are required!"})
    @IsString()
    username: string; 

    @IsNotEmpty({message: "All fields are required!"})
    @IsString()
    @IsUrl()
    avatar: string;
}