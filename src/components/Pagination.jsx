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
      <button onClick={decrease} type="button" class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-mm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">Prev</button>
      <p className="p-7 text-black font-bold dark:text-white">{page}</p>
      <button onClick={increase} type="button" class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-m p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">Next</button>
    </div>
  )
}
