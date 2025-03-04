import { Surah } from "../types/SurahsType";
import { Link } from "react-router-dom";

interface Props {
  surah: Surah;
}

const SurahCard = ({ surah }: Props) => {
  return (
    <Link to={`/${surah.surahId}`}>
      <div
        style={{
          backgroundColor: "whitesmoke",
          width: "100%",
          height: "24px",
          borderRadius: "20px",
          textAlign: "center",
          marginTop: "6px",
          marginBottom: "14px",
          paddingTop: "6px",
          paddingBottom: "6px",
          cursor: "pointer",
        }}
      >
        {surah.surahName}
      </div>
    </Link>
  );
};

export default SurahCard;
