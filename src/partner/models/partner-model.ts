import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Partners {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  email: string;
}