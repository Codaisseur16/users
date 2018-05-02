import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { Exclude } from "class-transformer";
import { IsEmail, IsString} from 'class-validator'

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

// false = no rights, therefore you are a student
  @Column('boolean', {nullable: false})
  teacher: boolean

}