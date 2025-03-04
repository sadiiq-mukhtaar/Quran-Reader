import AyahsComponent from "./AyahsComponent";
import { ApiResponse } from "../types/apiResponseType";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const SurahComponent = () => {
  const { id } = useParams();

  async function fetchSurah() {
    const response = await fetch(
      `https://api.alquran.cloud/v1/surah/${id}/ar.saoodshuraym`
    );

    const data = await response.json();

    return data;
  }

  const { data, error, isLoading } = useQuery<ApiResponse, Error>({
    queryKey: ["surah", id],
    queryFn: fetchSurah,
  });
  // useEffect(() => {
  //   fetchSurah();
  // }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // if (!data || !data.data) {
  //   return <div>No data available</div>;
  // }

  return (
    <div>
      <h1>{data!.data.name}</h1>
      <AyahsComponent ayahs={data!.data.ayahs} />
    </div>
  );
};

export default SurahComponent;
