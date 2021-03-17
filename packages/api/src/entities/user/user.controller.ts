import { Controller } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  // @Get()
  // async findAll(): Promise<Opportunity[]> {
  //   return await this.opportunityService.findAll();
  // }
}
