import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { diskStorage } from 'multer';
import { extname } from 'path';

/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument */
const storage = diskStorage({
  destination: './public/photos',
  filename: (_req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = extname(file.originalname);
    const filename = `${file.fieldname}-${uniqueSuffix}${ext}`;
    cb(null, filename);
  },
});

@Controller('profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}
  @Post()
  @UseInterceptors(FileInterceptor('photo', { storage }))
  async create(
    @Body() createProfileDto: CreateProfileDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) {
      throw new BadRequestException('Profil fotoğrafı yüklenmesi zorunludur.');
    }
    const photoUrl = `${process.env.BASE_URL || 'http://localhost:4000'}/public/photos/${file.filename}`;
    return this.profileService.create(createProfileDto, photoUrl);
  }
  @Get()
  findAll() {
    return this.profileService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profileService.findOne(+id);
  }
  @Patch(':id')
  @UseInterceptors(FileInterceptor('photo', { storage }))
  update(
    @Param('id') id: string,
    @Body() updateProfileDto: UpdateProfileDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    let photoUrl: string | undefined;
    if (file) {
      photoUrl = `${process.env.BASE_URL || 'http://localhost:4000'}/public/photos/${file.filename}`;
    }
    return this.profileService.update(+id, updateProfileDto, photoUrl);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profileService.remove(+id);
  }
}
