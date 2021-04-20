import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { UserErrorInterceptor } from './errors/domain-errors/user/user-error.interceptor';
import { IterationErrorInterceptor } from './errors/domain-errors/iteration/iteration-error.interceptor';
import { EntityErrorInterceptor } from './errors/domain-errors/abstract-entity/entity-error.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = parseInt(process.env.SERVER_PORT as string, 10);

  app
    .useGlobalInterceptors(
      new IterationErrorInterceptor(),
      new UserErrorInterceptor(),
      new EntityErrorInterceptor(),
    )
    .useGlobalPipes(
      new ValidationPipe({
        disableErrorMessages: true,
      }),
    );
  await app.listen(port);
}

bootstrap();
