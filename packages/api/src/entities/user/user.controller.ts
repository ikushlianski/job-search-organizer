import { Controller, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '../../auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  // @Get()
  // async findAll(): Promise<Opportunity[]> {
  //   return await this.opportunityService.findAll();
  // }
}
