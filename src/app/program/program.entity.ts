import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Program {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("uuid")
    userId: string;

    @Column()
    name: string;

    @Column("simple-json")
    activeHearings: string;

    @Column("simple-json")
    activeSights: string;

    @Column()
    wakeupSound: string;

    @Column()
    startTime: string;

    @Column()
    snoozeTime: number;

    @Column("simple-json")
    repeat: string;

    @Column("simple-json")
    speakOptions: string;

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