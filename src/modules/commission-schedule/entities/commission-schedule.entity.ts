import { Days } from 'src/shared/types/days.types';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class CommissionSchedule {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'time' })
  start_time: string;
  @Column({ type: 'time' })
  end_time: string;
  @Column({ type: 'enum', enum: Days, default: Days.MONDAY })
  day: string;
}
