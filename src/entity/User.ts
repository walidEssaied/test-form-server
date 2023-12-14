import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Sector } from './Sector';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  agree_to_terms!: boolean;

  @ManyToOne(() => Sector, sector => sector.users)
  sector!: Sector;
}
