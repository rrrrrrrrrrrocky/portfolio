import { DaumPostcodeDto } from "../dto/daum-postcode-dto/daum-postcode-dto";

export namespace NodeJS {
  // export interface ProcessEnv {
  //   NEXT_PUBLIC_SUPABASE_URL: string;
  //   NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
  //   NEXT_PUBLIC_DATABASE_URL: string;
  // }
}
declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    daum: DaumPostcodeDto.Response._GetDaumPostcode;
  }
}
