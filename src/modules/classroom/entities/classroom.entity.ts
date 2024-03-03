import { Building } from 'src/modules/building/entities/building.entity';
import { Commission } from 'src/modules/commission/entities/commission.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Classroom {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'varchar', length: 100 })
  name: string;
  @ManyToOne(() => Building, (building) => building.classrooms)
  building: Building;
  @OneToMany(() => Commission, (commission) => commission.classroom)
  commissions: Commission[];
  constructor(partial: Partial<Classroom>) {
    Object.assign(this, partial);
  }
}
