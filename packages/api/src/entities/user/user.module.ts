import { forwardRef, Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthModule } from '../../auth/auth.module';

@Module({
  imports: [forwardRef(() => AuthModule), DatabaseModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
