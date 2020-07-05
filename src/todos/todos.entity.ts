import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Todos {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    done: boolean

}
