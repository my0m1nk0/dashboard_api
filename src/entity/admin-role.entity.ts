import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class AdminRole {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  dob: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
