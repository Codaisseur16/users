import 'reflect-metadata'
import {createKoaServer} from "routing-controllers"
import setupDb from './db'
import UserController from './controllers/controller'
import LoginController from './logins/controller'
import TeacherController from './checkUserRole/controller'


const port = process.env.PORT || 4003

const app = createKoaServer({
  cors: true,
  controllers: [
    UserController,
    LoginController,
    TeacherController
    ]
})

setupDb()
  .then(_ => {
    app.listen(port, () => console.log(`Listening on port ${port}`))
  })
  .catch(err => console.error(err))
