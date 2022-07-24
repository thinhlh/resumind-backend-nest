import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class FirebaseToken {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("uuid")
    userId: string;

    @Column()
    token: string;

    @Column()
    description: string;

    @CreateDateColumn()
    createdDate: Date;

    @UpdateDateColumn()
    updatedDate: Date;

    @Column()
    isDeleted: boolean;
}