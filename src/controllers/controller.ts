import { JsonController, Get, Param, Put, Body, Post, Delete, NotFoundError } from 'routing-controllers'
import User from '../entities/users'


@JsonController()
export default class UserController {
  @Get('/users')
  allPages(){
    return User.find()
  }
  @Post('/users')
  createUser(
    @Body() user: User
  ) {
    return user.save()
  }
} 