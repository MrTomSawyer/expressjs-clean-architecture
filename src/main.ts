import { App } from "./app"
import { ExceptionFilter } from "./errors/exteption.filter";
import { LoggerService } from "./logger/logger.service";
import { UserController } from "./users/users.controller";

const bootstrap = async () => {
  const logger = new LoggerService();
  const app = new App(
    logger,
    new UserController(logger),
    new ExceptionFilter(logger)
    );
  app.init();
}

bootstrap();