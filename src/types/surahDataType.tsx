import { Ayah } from "./ayahType";
import { Edition } from "./editionType";

export interface SurahData {
  number: number; // Surah number
  name: string; // Surah name in Arabic
  englishName: string; // Surah name in English
  englishNameTranslation: string; // Translation of the surah name in English
  revelationType: string; // Revelation type (e.g., "Meccan" or "Medinan")
  numberOfAyahs: number; // Total number of ayahs in the surah
  ayahs: Ayah[]; // Array of ayahs
  edition: Edition; // Edition information
}
