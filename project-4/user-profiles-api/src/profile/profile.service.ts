import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Profile } from './profile.entity/profile.entity';
import { ProfileType } from '../profile-type/profile-type.entity';

import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}
  async create(
    createProfileDto: CreateProfileDto,
    photoUrl: string,
  ): Promise<Profile> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createProfileDto.password, salt);

    const newProfile = this.profileRepository.create({
      username: createProfileDto.username,
      email: createProfileDto.email,
      password: hashedPassword,
      photo: photoUrl,
      profileType: { id: +createProfileDto.profileTypeId } as ProfileType,
    });
    return this.profileRepository.save(newProfile);
  }

  findAll(): Promise<Omit<Profile, 'password'>[]> {
    return this.profileRepository
      .find({ relations: ['profileType'] })
      .then((profiles) =>
        profiles.map((profile) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { password: _, ...result } = profile;
          return result as Omit<Profile, 'password'>;
        }),
      );
  }

  async findOne(id: number): Promise<Omit<Profile, 'password'>> {
    const profile = await this.profileRepository.findOne({ where: { id } });
    if (!profile) {
      throw new NotFoundException(`ID'si ${id} olan kullanıcı bulunamadı.`);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...result } = profile;
    return result as Omit<Profile, 'password'>;
  }

  async update(
    id: number,
    updateProfileDto: UpdateProfileDto,
    photoUrl?: string,
  ): Promise<Profile> {
    const profile = await this.profileRepository.findOne({ where: { id } });
    if (!profile) {
      throw new NotFoundException(`ID'si ${id} olan kullanıcı bulunamadı.`);
    }

    if (updateProfileDto.password) {
      const salt = await bcrypt.genSalt();
      updateProfileDto.password = await bcrypt.hash(
        updateProfileDto.password,
        salt,
      );
    }
    Object.assign(profile, updateProfileDto);

    if (updateProfileDto.profileTypeId) {
      const type = new ProfileType();
      type.id = +updateProfileDto.profileTypeId;
      profile.profileType = type;
    }

    if (photoUrl) {
      profile.photo = photoUrl;
    }

    return this.profileRepository.save(profile);
  }

  async remove(id: number): Promise<{ affected?: number }> {
    const result = await this.profileRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`ID'si ${id} olan kullanıcı bulunamadı.`);
    }
    return { affected: result.affected ?? undefined };
  }
}
