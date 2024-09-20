export declare class CreateDavaDto {
    dosyaNo: string;
    davaciAdi: string;
    davaliAdi: string;
}
declare const UpdateDavaDto_base: import("@nestjs/mapped-types").MappedType<Omit<CreateDavaDto, "dosyaNo">>;
export declare class UpdateDavaDto extends UpdateDavaDto_base {
    'dava.davaciAdi': string;
    'dava.davaliAdi': string;
}
export {};
