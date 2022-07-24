import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    username: string;

    @Column()
    userEmail: string;

    @Column()
    password: string;

    @Column()
    fullName: string;

    @Column("timestamptz")
    lastLogin: Date;

    @CreateDateColumn()
    createdDate: Date;

    @UpdateDateColumn()
    updatedDate: Date;

    @Column()
    role: string;

    @Column("integer")
    level: number;

    @Column("simple-json")
    interested: string;

    @Column()
    enabled: boolean;

    @Column()
    isDeleted: boolean;
}