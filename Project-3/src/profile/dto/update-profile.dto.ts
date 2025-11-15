/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
import { PartialType } from '@nestjs/mapped-types';
import {
  IsNotEmpty,
  Matches,
  MinLength,
  ValidateIf,
  IsOptional,
  IsString,
} from 'class-validator';
import { CreateProfileDto, IsMatching } from './create-profile.dto';

export class UpdateProfileDto extends PartialType(CreateProfileDto) {
  @ValidateIf((obj: UpdateProfileDto) => obj.password !== undefined)
  @IsNotEmpty({ message: 'Şifre boş bırakılamaz.' })
  @MinLength(8, { message: 'Şifre en az 8 karakter olmalıdır.' })
  @Matches(new RegExp('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])'), {
    message:
      'Şifre, bir büyük harf, bir küçük harf, bir sayı ve bir sembol içermelidir.',
  })
  password?: string;

  @ValidateIf((obj: UpdateProfileDto) => obj.password !== undefined)
  @IsNotEmpty({ message: 'Şifre onayı boş bırakılamaz.' })
  @IsMatching('password', {
    message: 'Şifre onayı (confirmPassword) şifre ile aynı olmalıdır.',
  })
  confirmPassword?: string;
  @IsOptional()
  @IsString({ message: 'Fotoğraf URL metin olmalıdır.' })
  photo?: string;
}
