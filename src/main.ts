import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const HOST = process.env.HOST;
const PORT = process.env.PORT;

(async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, HOST, () => {
    console.log(`Listening on http://${HOST}:${PORT}`);
    console.log(`Graphql running on http://${HOST}:${PORT}/graphql`);
  });
})();
