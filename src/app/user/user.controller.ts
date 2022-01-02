import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserDTO } from './user.dto';
import { User } from './user.schema';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOkResponse({ status: 201 })
  @Get()
  async getAll(): Promise<Array<User>> {
    return await this.userService.getAll();
  }

  @ApiOkResponse({ status: 201 })
  @Get(':id')
  async get(@Param() userId: string) {
    return await this.userService.getOne(userId);
  }

  @ApiOkResponse({ status: 201 })
  @Post()
  async add(@Body() user: UserDTO): Promise<User> {
    return await this.userService.add(user);
  }

  @ApiOkResponse({ status: 201 })
  @Put(':id')
  async edit(@Param() userId: string, @Body() userDTO: UserDTO): Promise<User> {
    return await this.userService.update(userId, userDTO);
  }

  @ApiOkResponse({ status: 201 })
  @Delete(':id')
  delete(@Param() userId: string) {
    return `user edited ${userId}} `;
  }
}
