import { AcademicProgram } from 'src/modules/academic-program/entities/academic-program.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Plan {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'date' })
  start_year: Date;
  @Column({ type: 'date' })
  end_year: Date;
  @Column({ type: 'varchar', length: 100 })
  name: string;
  @Column({ type: 'date', default: () => 'CURRENT_TIMESTAMP' })
  register_date: Date;
  @OneToMany(() => AcademicProgram, (academicProgram) => academicProgram.plan)
  academic_programs: AcademicProgram[];
  constructor(partial: Partial<Plan>) {
    Object.assign(this, partial);
  }
}
