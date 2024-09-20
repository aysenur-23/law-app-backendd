import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dava {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dosyaNo: string;

  // Davacı Bilgileri
  @Column()
  davaciAdi: string;
  @Column()
  davaciSoyadi: string;
  @Column()
  davaciAdresi: string;
  @Column()
  davaciIletisim: string;
  @Column()
  davaciMeslegi: string;

  // Davalı Bilgileri
  @Column()
  davaliAdi: string;
  @Column()
  davaliSoyadi: string;
  @Column()
  davaliAdresi: string;
  @Column()
  davaliIletisim: string;
  @Column()
  davaliMeslegi: string;

  // Genel Bilgiler
  @Column()
  genelBilgiler: string;
  @Column()
  il: string;
  @Column({ type: 'date' })
  baslamaTarihi: Date;
  @Column()
  gorevliMahkeme: string;
  @Column()
  davaAsamasi: string;
  @Column()
  notlar: string;

  // Diğer Özellikler
  @Column({ type: 'datetime' })
  createdAt: Date;
  @Column({ type: 'datetime' })
  updatedAt: Date;
}
