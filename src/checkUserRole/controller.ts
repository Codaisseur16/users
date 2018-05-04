import { JsonController, Body, Post,  BadRequestError, HttpCode } from 'routing-controllers'
import User from '../entities/users'


@JsonController()
export default class TeacherController {

  @Post('/teacher')
  @HttpCode(200)
  async authenticate(
    @Body() body: any
  ) {
    const user = await User.findOne({ id: body.id  })
    console.log("line 16", user)

    if (!user) throw new BadRequestError('A user with this id does not exist')

    //if (!await user) return false

    return  user
  }

}
