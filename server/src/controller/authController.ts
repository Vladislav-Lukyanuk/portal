import { inject } from "inversify";
import {
  BaseHttpController,
  controller,
  httpPost,
  requestBody,
} from "inversify-express-utils";

import { DECLARATIONS } from "@app/ioc/declarations";
import { IAuthService } from "@app/service/IAuthService";

@controller("/auth")
export class AuthController extends BaseHttpController {
  @inject(DECLARATIONS.AuthService)
  private readonly authService: IAuthService;

  @httpPost("/sign-up")
  public async signUP(
    @requestBody() dto: { login: string; password: string }
  ): Promise<void> {
    console.log(dto.login, dto.password);
    // const user = await this.authService.signUp();

    return;
  }
}
