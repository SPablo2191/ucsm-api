import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { StudentStatus } from '../../../shared/types/status.types';
@Entity()
export class Student {
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
  @Column({ type: 'date' })
  birth_date: Date;
  @Column({ type: 'date', default: () => 'CURRENT_TIMESTAMP' })
  register_date: Date;
  @Column({ type: 'varchar', length: 100 })
  email: string;
  @Column({ type: 'varchar' })
  phone_number: string;
  @Column({ type: 'varchar' })
  address: string;
  @Column({ type: 'varchar', length: 50 })
  identification_document: string;
  @Column({ type: 'varchar' })
  password: string;
  @Column({ type: 'enum', enum: StudentStatus, default: StudentStatus.ACTIVE })
  status: string;
}
