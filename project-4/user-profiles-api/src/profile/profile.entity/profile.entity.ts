import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ProfileType } from '../../profile-type/profile-type.entity';
@Entity('profiles')
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  photo: string;

  @ManyToOne(() => ProfileType, (profileType) => profileType.profiles, {
    eager: true,
  })
  @JoinColumn({ name: 'profileTypeId' })
  profileType: ProfileType;
}
