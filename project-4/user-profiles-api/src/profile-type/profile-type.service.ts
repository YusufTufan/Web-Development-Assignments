import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfileType } from './profile-type.entity';

@Injectable()
export class ProfileTypeService implements OnModuleInit {
  constructor(
    @InjectRepository(ProfileType)
    private profileTypeRepository: Repository<ProfileType>,
  ) {}

  async onModuleInit() {
    // Eğer tablo boşsa örnek verileri bas
    const count = await this.profileTypeRepository.count();
    if (count === 0) {
      await this.profileTypeRepository.save([
        { name: 'Admin' },
        { name: 'User' },
        { name: 'Guest' },
      ]);
    }
  }

  findAll() {
    return this.profileTypeRepository.find();
  }
}
