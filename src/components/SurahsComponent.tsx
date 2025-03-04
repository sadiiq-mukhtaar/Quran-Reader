import { useState } from "react";
import surahsResponse from "../assets/surahs.json";
import { ApiSurahs } from "../types/SurahsType";
import SurahCard from "./SurahCard";
const SurahsComponent = () => {
  const [data] = useState<ApiSurahs>(surahsResponse as ApiSurahs);
  return (
    <div>
      <h1>سُورَة</h1>
      {data.surahs.map((surah) => (
        <SurahCard surah={surah} key={surah.surahId} />
      ))}
    </div>
  );
};

export default SurahsComponent;
