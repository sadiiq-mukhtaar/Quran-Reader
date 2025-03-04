import { Ayah } from "../types/ayahType";

interface Props {
  ayah: Ayah;
}

const AyahComponent = ({ ayah }: Props) => {
  return (
    <div className="ayah-container ">
      <div className="ayah">
        <p>{ayah.text}</p>
      </div>
      <div className="ayah-details ">
        <p>ayah number : {ayah.numberInSurah}</p>
        <p>hizb quator : {ayah.hizbQuarter}</p>
        <p> page : {ayah.page}</p>
      </div>
      <audio
        src={ayah.audio}
        controls
        style={{ width: "100%", marginTop: "2.2rem" }}
      ></audio>
    </div>
  );
};

export default AyahComponent;
