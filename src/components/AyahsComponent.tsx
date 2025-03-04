import { Ayah } from "../types/ayahType";
import AyahComponent from "./AyahComponent";

interface Props {
  ayahs: Ayah[];
}

const AyahsComponent = ({ ayahs }: Props) => {
  return (
    <div>
      {ayahs.map((ayah) => (
        <AyahComponent key={ayah.number} ayah={ayah} />
      ))}
    </div>
  );
};

export default AyahsComponent;
