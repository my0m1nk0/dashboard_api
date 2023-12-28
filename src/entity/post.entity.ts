import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Department } from './department.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  date: string;

  @Column()
  content: string;

  @ManyToMany(() => Department, (department) => department.posts)
  department: Department;
}
