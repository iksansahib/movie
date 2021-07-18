
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'movie_log' })
export class MovieLog {
    @PrimaryGeneratedColumn({})
    id: number;

    @Column({ type: "varchar", nullable: false })
    endpoint: string;

    @Column({ type: "varchar", nullable: false })
    params: string;


}
