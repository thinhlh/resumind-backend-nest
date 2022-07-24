import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Bubble {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    value: string;

    @Column()
    fromIp: string;

    @CreateDateColumn()
    createdDate: Date;

    @Column("uuid")
    owner: string;

    @Column()
    enabled: boolean;
}