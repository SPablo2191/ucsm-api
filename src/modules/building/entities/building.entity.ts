import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Building {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'varchar', length: 100 })
  name: string;
}
