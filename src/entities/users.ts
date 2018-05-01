import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { Exclude } from "class-transformer";
import { IsEmail, IsString, Validate} from 'class-validator'
import {IsRole} from '../validators/IsRole'


type Role = 'teacher' | 'student'

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

  @Validate(IsRole, {message: 'Incorrect role'})
  @Column('text', {nullable: false, default: 'student'})
  rights: Role

}
