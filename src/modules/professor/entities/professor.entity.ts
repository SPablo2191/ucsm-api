import { Commission } from 'src/modules/commission/entities/commission.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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
  @Column({ type: 'varchar', length: 100, default: '' })
  image_url: string;
  @Column({ type: 'date', default: () => 'CURRENT_TIMESTAMP' })
  register_date: Date;
  @OneToMany(() => Commission, (commission) => commission.professor)
  commissions: Commission[];
  constructor(partial: Partial<Professor>) {
    Object.assign(this, partial);
  }
}
