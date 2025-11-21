import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileModule } from './profile/profile.module';
import { ProfileTypeModule } from './profile-type/profile-type.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'profiles.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ProfileModule,
    ProfileTypeModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
