import { Subject } from 'src/modules/subject/entities/subject.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Semester {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'varchar', length: 100 })
  name: string;
  @Column({ type: 'date' })
  start_date: Date;
  @Column({ type: 'date' })
  end_date: Date;
  @OneToMany(() => Subject, (subject) => subject.semester)
  subjects: Subject[];
  constructor(partial: Partial<Semester>) {
    Object.assign(this, partial);
  }
}
