import { Module } from '@nestjs/common';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { initializeApp } from 'firebase/app';
//import { FirebaseAuthStrategy } from './firebase-auth.strategy';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [
    {
      provide: 'FIREBASE_APP',
      useFactory: (configService: ConfigService) => {
        const firebaseConfig = {
          apiKey: configService.get('AIzaSyAdBuqtvqhy7_nnLAN5FjhLpHy-QqyMPVQ'),
          authDomain: configService.get('dava-takip-420da.firebaseapp.com '),
          projectId: configService.get('dava-takip-420da'),
          messagingSenderId: configService.get('610442341986'),
          //appId: configService.get('FIREBASE_APP_ID'),
          //measurementId: configService.get('FIREBASE_MEASUREMENT_ID'),
        };

        return initializeApp(firebaseConfig);
      },
      inject: [ConfigService],
    },
  ],
  exports: ['FIREBASE_APP'],
})
export class AppModule {}
