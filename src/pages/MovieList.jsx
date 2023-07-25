import { useEffect, useState } from "react";
import { Card, Pagination } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { useSearchParams } from "react-router-dom";

export const MovieList = ({ apiPath, title, currentPage }) => {
  const [pageNumber, setPageNumber] = useState();
  console.log("pn ", pageNumber);
  currentPage = `&page=${pageNumber}`;
  console.log(currentPage, "pn", apiPath);
  const { data: movies } = useFetch(apiPath, currentPage);
  const pageTitle = useTitle(title);
  const scrollUp = () => window.window.scrollTo(0, 0);
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
      <button
        onClick={scrollUp}
        type="button"
        class="fixed bottom-2 right-2 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
      >
        <svg
          class="h-8 w-8"
          viewBox="-0.5 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 13.8599L10.87 10.8C11.0125 10.6416 11.1868 10.5149 11.3815 10.4282C11.5761 10.3415 11.7869 10.2966 12 10.2966C12.2131 10.2966 12.4239 10.3415 12.6185 10.4282C12.8132 10.5149 12.9875 10.6416 13.13 10.8L16 13.8599"
            stroke="#1A56DB"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span class="sr-only">Icon description</span>
      </button>
    </main>
  );
};
