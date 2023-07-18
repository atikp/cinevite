import { Routes , Route} from "react-router-dom";
import { MovieList, MovieDetail, Search, PageNotFound } from "../pages";


export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
      <Routes>

          <Route path="" element={ <MovieList apiPath="movie/now_playing" title="Home"/> } />
          <Route path="/movie/:id" element={ <MovieDetail title="Home"/> } />
          <Route path="/movies/popular" element={ <MovieList apiPath="movie/popular" title="Popular Movies"/> } />
          <Route path="/movies/top" element={ <MovieList apiPath="movie/top_rated" title="Top Rated Movies"/> } />
          <Route path="/movies/upcoming" element={ <MovieList apiPath="movie/upcoming" title="Upcoming Movies"/> } />
          <Route path="/search" element={ <Search apiPath="search/movie"/> } />
          <Route path="*" element={ <PageNotFound /> } />
     
      </Routes>
    </div>
  )
}
