import { Classroom } from 'src/modules/classroom/entities/classroom.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Building {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'varchar', length: 100 })
  name: string;
  @OneToMany(() => Classroom, (classroom) => classroom.building)
  classrooms: Classroom[];
  constructor(partial: Partial<Building>) {
    Object.assign(this, partial);
  }
}
