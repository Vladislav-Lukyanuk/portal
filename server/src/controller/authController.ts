import { inject } from "inversify";
import {
  BaseHttpController,
  controller,
  httpPost,
  requestBody,
} from "inversify-express-utils";

import { DECLARATIONS } from "@app/ioc/declarations";
import { IAuthService } from "@app/service/auth/IAuthService";
import { noAuthMiddleware } from "@app/middleware/noAuthMiddleware";
import { AuthDto } from "@app/dto/authDto";
import { TokenDto } from "@app/dto/tokenDto";

@controller("/auth")
export class AuthController extends BaseHttpController {
  @inject(DECLARATIONS.AuthService)
  private readonly authService: IAuthService;

  @httpPost("/sign-up", noAuthMiddleware)
  public async signUp(
    @requestBody() { login, password }: AuthDto
  ): Promise<TokenDto> {
    return await this.authService.signUp(login, password);
  }

  @httpPost("/sign-in", noAuthMiddleware)
  public async signIn(
    @requestBody() { login, password }: AuthDto
  ): Promise<TokenDto> {
    return await this.authService.signIn(login, password);
  }
}
