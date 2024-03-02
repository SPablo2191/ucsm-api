import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
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
  @Column({ type: 'date' })
  register_date: Date;
  constructor(partial: Partial<Plan>) {
    Object.assign(this, partial);
  }
}
