import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn
} from 'typeorm';
import { DateTimeTransformer } from '../../common/entities/date-value-transformer';

@Entity()
export class Otp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated('uuid')
  key: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  email: string;

  @Column()
  code: string;

  @Column()
  isVerified: boolean;

  @CreateDateColumn()
  @Column({ type: 'timestamp', transformer: new DateTimeTransformer() })
  expireAt: Date;

  @CreateDateColumn({
    type: 'timestamp',
    transformer: new DateTimeTransformer()
  })
  createdAt: Date;
}
