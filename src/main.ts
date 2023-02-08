import { App } from "./app"
import { LoggerService } from "./logger/logger.service";
import { UserController } from "./users/users.controller";

const bootstrap = async () => {
  const app = new App(
    new LoggerService(),
    new UserController()
    );
  app.init();
}

bootstrap();