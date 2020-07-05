import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

enum Gender { Male, Female };

@Entity()
export class Animals {
    @PrimaryGeneratedColumn('uuid')
    id: number;


    @Column()
    name: string;

    @Column({ default: Gender.Male })
    gender: Gender;

    @Column()
    legs: number
}
