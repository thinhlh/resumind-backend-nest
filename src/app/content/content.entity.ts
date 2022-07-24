import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Content {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("uuid")
    owner: string;

    @Column()
    content: string;

    @Column()
    author: string;

    @Column()
    contentType: string;

    @Column()
    category: string;

    @Column()
    tags: string

    @Column()
    language: string

    @Column("integer")
    like: number;

    @Column()
    description: string;

    @Column("uuid")
    createdUser: string;

    @CreateDateColumn()
    createdDate: Date;

    @UpdateDateColumn()
    updatedDate: Date;

    @Column()
    isFree: boolean;

    @Column()
    isDeleted: boolean
}