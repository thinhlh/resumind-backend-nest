import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Auth {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    fullname: string;

    @Column()
    email: string;

    @Column()
    role: string;

    @UpdateDateColumn()
    lastLogin: Date;

    @CreateDateColumn()
    createdDate: Date;

    // TODO created user

    @Column()
    enabled: boolean;

}