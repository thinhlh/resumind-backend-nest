import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserGroup {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @CreateDateColumn()
    createdDate: string;

    @Column("uuid")
    createdUser: string;

    @Column("uuid")
    groupId: string;

    @Column("uuid")
    userId: string;

    @Column()
    approved: boolean;
}