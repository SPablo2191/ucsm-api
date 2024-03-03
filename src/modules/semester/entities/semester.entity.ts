import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  constructor(partial: Partial<Semester>) {
    Object.assign(this, partial);
  }
}
