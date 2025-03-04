import SurahsComponent from "./components/SurahsComponent";
import "./index.css";
import SurahComponent from "./components/SurahComponent";
import { useParams } from "react-router-dom";
import NoSurahComponent from "./components/NoSurahComponent";

const App = () => {
  const { id } = useParams();
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 6fr",
        gap: "16px",
      }}
    >
      <div>
        <SurahsComponent />
      </div>

      {id && (
        <div>
          <SurahComponent />
        </div>
      )}

      {id || (
        <div>
          <NoSurahComponent />
        </div>
      )}
    </div>
  );
};

export default App;
