import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Debt {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  balance: number;
  @Column({ type: 'date' })
  register_date: Date;
  @Column({ type: 'date', default: () => 'CURRENT_TIMESTAMP' })
  updated_date: Date;
}
