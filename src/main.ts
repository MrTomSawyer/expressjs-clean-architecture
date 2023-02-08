import { App } from "./app"
import { LoggerService } from "./logger/logger.service";

const bootstrap = async () => {
  const app = new App(new LoggerService());
  app.init();
}

bootstrap();