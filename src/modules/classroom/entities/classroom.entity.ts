import { Building } from 'src/modules/building/entities/building.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Classroom {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'varchar', length: 100 })
  name: string;
  @ManyToOne(() => Building, (building) => building.classrooms)
  building: Building;
  constructor(partial: Partial<Classroom>) {
    Object.assign(this, partial);
  }
}
