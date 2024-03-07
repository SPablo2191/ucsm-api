import { Plan } from 'src/modules/plan/entities/plan.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AcademicProgram {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'varchar', length: 100 })
  name: string;
  @Column({ type: 'varchar', length: 50 })
  code: string;
  @ManyToOne(() => Plan, (plan) => plan.academic_programs)
  plan: Plan;
  constructor(partial: Partial<AcademicProgram>) {
    Object.assign(this, partial);
  }
}
