import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Column({ type: 'varchar', length: 100 })
  first_name: string;
  @Column({ type: 'varchar', length: 100 })
  middle_name: string;
  @Column({ type: 'varchar', length: 100 })
  last_name: string;
  @Column({ type: 'varchar', length: 100 })
  second_last_name: string;
  @Column({ type: 'date' })
  birth_date: Date;
  @Column({ type: 'date' })
  register_date: Date;
  @Column({ type: 'varchar', length: 100 })
  email: string;
  @Column({ type: 'varchar', length: 20 })
  phone_number: string;
  @Column({ type: 'varchar' })
  address: string;
  @Column({ type: 'varchar', length: 50 })
  identification_document: string;
  @Column({ type: 'varchar' })
  password: string;
}
