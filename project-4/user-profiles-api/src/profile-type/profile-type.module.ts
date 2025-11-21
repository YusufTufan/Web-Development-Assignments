import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileType } from './profile-type.entity';
import { ProfileTypeService } from './profile-type.service';
import { ProfileTypeController } from './profile-type.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProfileType])],
  controllers: [ProfileTypeController],
  providers: [ProfileTypeService],
  exports: [ProfileTypeService],
})
export class ProfileTypeModule {}
