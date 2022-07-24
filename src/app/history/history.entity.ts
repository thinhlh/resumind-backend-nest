import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class History {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("uuid")
    userId: string;

    @Column()
    action: string;

    @Column("simple-json")
    value: string;

    @Column()
    description: string;

    @CreateDateColumn()
    createdDate: string;
}