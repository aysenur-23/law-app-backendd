import { OmitType } from '@nestjs/mapped-types';

export class CreateDavaDto {
  dosyaNo: string;
  davaciAdi: string;
  davaliAdi: string;
}

export class UpdateDavaDto extends OmitType(CreateDavaDto, ['dosyaNo']) {
  'dava.davaciAdi': string;
  'dava.davaliAdi': string;
}
