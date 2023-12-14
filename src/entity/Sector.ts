import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Sector {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar" })
  name!: string;

  @Column({ nullable: true, type: "varchar" })
  parentId?: number | null;

  @OneToMany(() => User, (user) => user.sector)
  users!: User[];
}
