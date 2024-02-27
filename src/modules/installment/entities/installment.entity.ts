import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Installment {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total_amount: number;
  @Column({ type: 'date', default: () => 'CURRENT_TIMESTAMP' })
  register_date: Date;
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  paid_amount: number;
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  owed_amount: number;
  @Column({ type: 'varchar' })
  code: string;
}
