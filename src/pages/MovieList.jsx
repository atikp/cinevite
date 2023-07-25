import { useEffect, useState } from "react";
import { Card, Pagination } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { useSearchParams } from "react-router-dom";

export const MovieList = ({ apiPath, title, currentPage}) => {
  const [pageNumber, setPageNumber] = useState();
  console.log("pn ", pageNumber);
  currentPage= `&page=${pageNumber}`
  console.log(currentPage, "pn", apiPath);
  const { data: movies } = useFetch(apiPath, currentPage);
  const pageTitle = useTitle(title);
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
      <div className="flex justify-center">
          <Pagination setPageNumber={setPageNumber} />
        </div>
        <div className="flex justify-center"></div>
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
