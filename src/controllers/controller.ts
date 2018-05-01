import { JsonController, Get, Param, Put, Body, Post, Delete, NotFoundError } from 'routing-controllers'
import User from '../entities/users'


@JsonController()
export default class UserController {
  @Get('/users')
  async allPages(){
    const users = await User.find()
    return { users }
  }
  @Post('/users')
  createUser(
    @Body() user: User
  ) {
    return user.save()
  }
} 