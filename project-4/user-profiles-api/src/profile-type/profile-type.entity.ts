import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Profile } from '../profile/profile.entity/profile.entity';

@Entity()
export class ProfileType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Profile, (profile) => profile.profileType)
  profiles: Profile[];
}
