
import { Link } from "react-router-dom";
import  Backup from "../assets/backup.jpg"

export const Card = ({movie}) => {
  const {id, original_title, overview, poster_path} = movie;
  const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : Backup;
  
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
    <Link to={`/movie/${id}`}>
      <img
        className="rounded-t-lg"
        src={image}
        alt=""
      />
    </Link>
    <div className="p-5">
      <Link to={`/movie/${id}`}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
         {original_title}
        </h5>
      </Link>
      <div className="flex items-center">
            <svg
              className="w-4 h-4 text-yellow-500 dark:text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ml-2 font-bold text-gray-900 dark:text-white">
              {movie.vote_average}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span
              href="#"
              className=" font-medium text-gray-900 underline hover:no-underline dark:text-white"
            >
              {movie.vote_count} Reviews
            </span>
          </div>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {overview}
      </p>
     
    </div>
  </div>
    )
    
};
