import { useEffect } from "react";
import { Link } from "react-router-dom";
import  PageNotFoundImage  from "../assets/pageNotFound.jpg"
export const PageNotFound = () => {

  useEffect(() => {
    document.title = `Page Not Found / CineVite`
    
  });
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-grey-700 font-bold my-10 dark:text-white">Oooops! <span className="animate-pulse text-red-600">404</span></p>
          <div className=" max-w-xs">
          <img className="rounded-full" src={PageNotFoundImage} alt="404 page not found image" />  
          </div>
        </div>
        <div className="flex justify-center">
          <Link to="/">
          <button className="my-7 w-32 text-xl text-white rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-800" type="button" >Back to CineVite</button>
          </Link>
        </div>
      </section>
    </main>
  )
}
