import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { Exclude } from "class-transformer";
import { IsEmail, IsString, Validate} from 'class-validator'
// import {IsRole} from '../validators/IsRole'
import * as bcrypt from 'bcrypt'



// type Role = 'teacher' | 'student'

@Entity()
export default class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text',  {default: null})
  firstName: string

  @IsString()
  @Column('text',  {default: null})
  lastName: string

  @IsEmail()
  @Column('text', {nullable: false})
  email: string

  @IsString()
  @Column('text', {nullable: false})
  @Exclude({ toPlainOnly: true })
  password: string

  async setPassword(rawPassword: string) {
  const hash = await bcrypt.hash(rawPassword, 10)
  this.password = hash
  }

  checkPassword(rawPassword: string): Promise<boolean> {
  return bcrypt.compare(rawPassword, this.password)
  }

  // @Validate(IsRole, {message: 'Incorrect role'})
  
  @Column('boolean', {nullable: false, default: false})
  rights: boolean
}
