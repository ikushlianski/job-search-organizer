import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { UserErrorInterceptor } from './errors/domain-errors/user/user-error.interceptor';
import { IterationErrorInterceptor } from './errors/domain-errors/iteration/iteration-error.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = parseInt(process.env.SERVER_PORT as string, 10);

  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: true,
    }),
  );
  app.useGlobalInterceptors(
    new UserErrorInterceptor(),
    new IterationErrorInterceptor(),
  );
  await app.listen(port);
}

bootstrap();
