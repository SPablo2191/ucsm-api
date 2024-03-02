import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Professor {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'varchar', length: 100 })
  first_name: string;
  @Column({ type: 'varchar', length: 100, default: '' })
  middle_name: string;
  @Column({ type: 'varchar', length: 100 })
  last_name: string;
  @Column({ type: 'varchar', length: 100, default: '' })
  second_last_name: string;
  @Column({ type: 'varchar', length: 100 })
  email: string;
  @Column({ type: 'date', default: () => 'CURRENT_TIMESTAMP' })
  register_date: Date;
}
