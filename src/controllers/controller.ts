import { JsonController, Get, Param, Put, Body, Post, Delete, NotFoundError } from 'routing-controllers'
import User from '../entities/users'

@JsonController()
export default class UserController {
    @Post('/users')
    createUser(
    @Body() user: User
    ) {
    return user.save()
    }

    @Get('/users')
    async allUsers() {
        const users = await User.find()
        return {users}
    }
  
} 

