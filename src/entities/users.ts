import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { Exclude } from "class-transformer";

@Entity()
export default class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text',  {default: null})
  firstName: string

  @Column('text',  {default: null})
  lastName: string

  @Column('text', {nullable: false})
  email: string

  @Column('text', {nullable: false})
  @Exclude({ toPlainOnly: true })
  password: string

}