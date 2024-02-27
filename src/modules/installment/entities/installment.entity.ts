import { Debt } from 'src/modules/debt/entities/debt.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
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
  @ManyToOne(() => Debt, (debt) => debt.installments)
  debt: Debt;
  @Column({ type: 'varchar' })
  debt_id: string;
}
