import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Post } from './post.entity';

export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Post, (post) => post.department)
  posts: Post[];
}
