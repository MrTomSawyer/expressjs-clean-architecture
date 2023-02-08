import { App } from "./app"

const bootstrap = async () => {
  const app = new App();
  app.init();
}

bootstrap();