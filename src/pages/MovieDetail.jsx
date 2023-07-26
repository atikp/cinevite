import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Iframe  from "react-iframe";
import { HashLink } from 'react-router-hash-link';
import { useTitle } from "../hooks/useTitle";
import Backup from "../assets/backup.jpg";

export const MovieDetail = () => {
  const params = useParams();
  // console.log(params.id)
  const [movie, setMovie] = useState({});
  const [backdrop, setBackdrop] = useState("");
  const [cast, setCast] = useState([]);
  const [videos, setVideos] = useState([])
  const scrollUp = () => window.window.scrollTo(0, 0);

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=2639bdf42f150050f72803f68c626236`
      );
      const json = await response.json();
      json.imdb_id = json.imdb_id.toUpperCase();
      json.budget = json.budget.toLocaleString();
      json.revenue = json.revenue.toLocaleString();
      json.vote_average = json.vote_average.toFixed(1);
      // backdrop_path = json.backdrop_path;
      setBackdrop(json.backdrop_path);
      setMovie(json);
    }
    async function fetchPeople() {
      const people = `${params.id}/credits`;
      const peopleResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${people}?api_key=2639bdf42f150050f72803f68c626236`
      );
      const json = await peopleResponse.json();
      setCast(json.cast);
      // console.log(...cast);
    }
    async function fetchVideos() {
      const vid = `${params.id}/videos`;
      const videoResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${vid}?api_key=2639bdf42f150050f72803f68c626236`
      )
      const json = await videoResponse.json();
      // console.log(json.results)
      setVideos(json.results)
      
    }
    fetchMovie();
    fetchVideos();
    fetchPeople();
  }, [params.id]);

  const pageTitle = useTitle(movie.title);

  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : Backup;
  const backdropImage = backdrop
    ? `https://image.tmdb.org/t/p/w500${backdrop}`
    : "";
  // console.log(backdrop)
  return (
    <main>
      <section
        style={{ backgroundImage: `url(${backdropImage})` }}
        className="flex justify-around flex-wrap py-5 bg-no-repeat bg-cover bg-gray-900 bg-blend-overlay rounded-lg overflow-hidden"
      >
        <div className="max-w-md">
          <img className="rounded-s-2xl" src={image} alt={movie.title} />
        </div>
        <div className="max-w-2xl text-white text-lg translate-x-over  animate-slideFromRight ">
          <h1 className="text-4xl font-bold my-3 text-center lg:text-left">
            {movie.title}
          </h1>
          <p className="text-s text-center lg:text-left text-blue-300">
            <kbd>"{movie.tagline}"</kbd>
          </p>
          <p className="my-4">{movie.overview}</p>
          {movie.genres ? (
            <p className="my-7 flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <span
                  className="mr-2 border border-gray-200 rounded p-2"
                  key={genre.id}
                >
                  {genre.name}
                </span>
              ))}
            </p>
          ) : (
            ""
          )}

          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ml-2 font-bold text-white">{movie.vote_average}</p>
            <span className="w-1 h-1 mx-1.5 bg-gray-400 rounded-full"></span>
            <span href="#" className=" font-medium text-white ">
              {movie.vote_count} Reviews
            </span>
          </div>
          <div className="flex flex-col my-4 justify-evenly">
            <p className="my-4">
              <span className="mr-2 font-bold">Runtime:</span>
              <span> {movie.runtime} mins</span>
            </p>
            <p className="my-4">
              <span className="mr-2 font-bold">Budget:</span>
              <span> ${movie.budget}</span>
            </p>
            <p className="my-4">
              <span className="mr-2 font-bold">Revenue:</span>
              <span>${movie.revenue}</span>
            </p>
            <p className="my-4">
              <span className="mr-2 font-bold">Release Date:</span>
              <span> {movie.release_date} </span>
            </p>
            <p className="my-4">
              <span className="mr-2 font-bold">IMDB Code:</span>
              <a
                className="font-medium text-blue-500 hover:underline"
                href={`https://www.imdb.com/title/${movie.imdb_id}/`}
                target="_blank"
                rel="noreferrer"
              >
                {movie.imdb_id}
              </a>
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-wrap flex-col items-center">
        <h2 className="text-3xl p-5 dark:text-white " id="relatedVideos">Related Videos</h2>
        <div className="flex justify-center flex-wrap">
        {videos.map((video)=> (
          <div className="m-4"key={video.id}>
            {/* <video className="w-96" controls>
              <source src={`https://www.youtube.com/watch?v=${video.key}`} type="video/mp4" /> {`https://www.youtube.com/embed/${video.key}?fs=0`}
              Your browser does not support the video tag.
            </video> */}
            <Iframe id="ytplayer" type="text/html" width="350px" height="196.875px"
src={`https://www.youtube.com/embed/${video.key}`}
frameborder="0" allowfullscreen>your browser does not support this video</Iframe>
            {/* <iframe width="350" height="196.875" src={`https://www.youtube.com/embed/${video.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          </div>
        ))}

        </div>
      
      </section>
      <section>
        <div>
          {
            <div className="my-7 flex flex-wrap flex-col items-center gap-2">
              <h2 className="text-3xl p-5 dark:text-white " id="cast">Cast</h2>
              <div className="my-7 flex flex-wrap flex-between justify-center gap-2">
              {cast.map((person) => (
                <div className="flex flex-col items-center max-w-min"  key={person.name}>
                  <div className="overflow-hidden border border-transparent rounded-lg my-3 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-red-800/80">
                  <img
                    className="h-auto max-w-xs"
                    src={
                      person.profile_path
                        ? `https://image.tmdb.org/t/p/w185${person.profile_path}`
                        : `${Backup}`
                    }
                    alt={person.name}
                  />
                  </div>
                  <div className="flex flex-col items-center p-3">
                    <span className="mr5 dark:border-white text-white p-2">
                      {person.name}
                    </span>
                    <p id={person.cast_id} className="text-black dark:text-white">As: {person.character}</p>
                  </div>
                </div>
              ))}

              </div>
            </div>
            
          }
        </div>
      </section>
      {/* <button
        onClick={scrollUp}
        type="button"
        className="fixed bottom-2 right-2 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
      >
        <svg
          className="h-8 w-8"
          viewBox="-0.5 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 13.8599L10.87 10.8C11.0125 10.6416 11.1868 10.5149 11.3815 10.4282C11.5761 10.3415 11.7869 10.2966 12 10.2966C12.2131 10.2966 12.4239 10.3415 12.6185 10.4282C12.8132 10.5149 12.9875 10.6416 13.13 10.8L16 13.8599"
            stroke="#1A56DB"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="sr-only">Icon description</span>
      </button> */}

<div className="fixed bottom-0 z-50 w-full -translate-x-1/2 bg-white border-t border-gray-200 left-1/2 dark:bg-gray-700 dark:border-gray-600">
    <div className="w-full">
        <div className="flex justify-center  max-w-xs grid-cols-3 gap-1 p-1 mx-auto my-2 bg-gray-100 rounded-lg dark:bg-gray-600" role="group">
            <HashLink to="#cast" ><button type="button" className="px-5 py-1.5 text-xs font-medium text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 rounded-lg">
                Cast
            </button></HashLink>
            <button type="button" onClick={scrollUp} className="px-5 py-1.5 text-xs font-medium text-white bg-gray-900 dark:bg-gray-300 dark:text-gray-900 rounded-lg">
                Scroll to Top
            </button>
            <HashLink to="#relatedVideos" ><button type="button"  className="px-5 py-1.5 text-xs font-medium text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 rounded-lg">
                Videos
            </button></HashLink>
        </div>
    </div>
</div>

    </main>
  );
};
