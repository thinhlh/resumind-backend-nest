import { Column, CreateDateColumn, Entity, MissingPrimaryColumnError, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Setting {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("uuid")
    userId: string

    @Column()
    key: string;

    @Column("simple-json")
    value: string;

    @Column()
    description: string;

    @CreateDateColumn()
    createdDate: Date;

    @UpdateDateColumn()
    updatedDate: Date;

    @Column()
    enabled: boolean;

    @Column()
    isDeleted: boolean;
}