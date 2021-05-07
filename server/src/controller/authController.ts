import { inject } from "inversify";
import {
  BaseHttpController,
  controller,
  httpPost,
  requestBody,
} from "inversify-express-utils";

import { DECLARATIONS } from "@app/ioc/declarations";
import { IAuthService } from "@app/service/auth/IAuthService";
import { AuthDto } from "@app/dto/authDto";
import { TokenDto } from "@app/dto/tokenDto";

@controller("/auth")
export class AuthController extends BaseHttpController {
  @inject(DECLARATIONS.AuthService)
  private readonly authService: IAuthService;

  @httpPost("/sign-up")
  public async signUP(
    @requestBody() { login, password }: AuthDto
  ): Promise<TokenDto> {
    return await this.authService.signUp(login, password);
  }
}
