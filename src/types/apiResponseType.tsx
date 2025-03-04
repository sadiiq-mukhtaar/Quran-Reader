import { SurahData } from "./surahDataType";

export interface ApiResponse {
  code: number; // HTTP status code (e.g., 200)
  status: string; // Status message (e.g., "OK")
  data: SurahData; // The main data containing surah information
}
