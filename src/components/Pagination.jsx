import { useEffect, useState } from "react"


export const Pagination = ({setPageNumber}) => {
  const [page, setPage] = useState(1);
  useEffect(() => {
    setPageNumber(page);
    
  }, [page]);
  const increase =() => {
    setPage(page+1);
  }
  const decrease =() => {
    page > 1 ? setPage(page-1): setPage(1);
  }
  return (
    <div className="pagination flex justify-around p-7 w-5">
      <button onClick={decrease} className="previous text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Prev</button>
      <p className="p-7 text-black font-bold dark:text-white">{page}</p>
      <button onClick={increase} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>
    </div>
  )
}
