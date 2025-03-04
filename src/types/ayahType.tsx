export interface Ayah {
  number: number;
  audio: string;
  audioSecondary: string[]; // Array of secondary audio URLs
  text: string; // Arabic text of the ayah
  numberInSurah: number; // Number of the ayah within the surah
  juz: number; // Juz number
  manzil: number; // Manzil number
  page: number; // Page number in the Quran
  ruku: number; // Ruku number
  hizbQuarter: number; // Hizb quarter number
  sajda: boolean; // Whether the ayah requires a sajda (prostration)
}
