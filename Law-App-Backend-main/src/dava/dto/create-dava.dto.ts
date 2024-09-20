import { IsNotEmpty, IsDate } from 'class-validator';

export class CreateDavaDto {
  @IsNotEmpty({ message: 'Başlama tarihi boş olamaz' })
  @IsDate({ message: 'Başlama tarihi geçerli bir tarih olmalıdır' })
  baslamaTarihi: Date;
}
