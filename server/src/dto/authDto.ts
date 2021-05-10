import { IsEmail, IsString, Matches, MinLength } from "class-validator";
import { Trim } from "class-sanitizer";

export class AuthDto {
  @Trim()
  @IsString()
  @IsEmail(
    {},
    {
      message: "Use your real email",
    }
  )
  public login: string;

  @Trim()
  @IsString()
  @MinLength(8, { message: "Password should be minimum of 8 characters" })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, {
    message:
      "Password should contain at least one digit, one lower and upper case character",
  })
  public password: string;
}
