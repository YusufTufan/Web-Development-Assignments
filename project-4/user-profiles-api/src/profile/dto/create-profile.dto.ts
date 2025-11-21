/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsNumberString,
  MinLength,
  Matches,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';

@ValidatorConstraint({ name: 'IsMatching', async: false })
export class IsMatchingConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    const [relatedPropertyName] = args.constraints;
    const relatedValue = (args.object as any)[relatedPropertyName];
    return value === relatedValue;
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.property} şifre ile eşleşmiyor.`;
  }
}

export function IsMatching(property: string, validationOptions?: any) {
  return (object: object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [property],
      validator: IsMatchingConstraint,
    });
  };
}

export class CreateProfileDto {
  @IsNotEmpty({ message: 'Kullanıcı adı boş bırakılamaz.' })
  @IsString({ message: 'Kullanıcı adı metin olmalıdır.' })
  username: string;

  @IsNotEmpty({ message: 'Email boş bırakılamaz.' })
  @IsEmail({}, { message: 'Geçerli bir email adresi giriniz.' })
  email: string;

  @IsNotEmpty({ message: 'Şifre boş bırakılamaz.' })
  @MinLength(8, { message: 'Şifre en az 8 karakter olmalıdır.' })
  @Matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d\s])/, {
    message:
      'Şifre, bir büyük harf, bir küçük harf, bir sayı ve bir sembol içermelidir.',
  })
  password: string;

  @IsNotEmpty({ message: 'Şifre onayı boş bırakılamaz.' })
  @IsMatching('password', {
    message: 'Şifre onayı (confirmPassword) şifre ile aynı olmalıdır.',
  })
  confirmPassword: string;

  @IsNotEmpty({ message: 'Profil tipi seçilmelidir.' })
  @IsNumberString({}, { message: 'Geçerli bir profil tipi seçiniz.' })
  profileTypeId: string;
}
