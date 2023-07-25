import { useEffect, useState } from "react";

export const useFetch = (apiPath,queryTerm="",currentPage) => {
  const [data, setData] = useState([]);

  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${import.meta.env.VITE_API_KEY}&query=${queryTerm}`;
  // queryTerm="" ? `https://api.themoviedb.org/3/${apiPath}?api_key=${import.meta.env.VITE_API_KEY}${currentPage}` :
  console.log(url,currentPage);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }
    fetchMovies();
  }, [url,currentPage]);

  return { data }
};
