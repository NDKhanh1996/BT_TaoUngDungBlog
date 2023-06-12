import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Blog {
    @PrimaryGeneratedColumn()
        readonly id: number;

    @Column()
    content: string;
}