import { Link } from "react-router-dom";

export const Footer = () => {
  return (
      <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-evenly md:p-6 dark:bg-gray-800">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://www.atikpatel.com" target="_blank" rel="noreferrer" className="hover:underline">Atik Patel</a>. All Rights Reserved.</span>
          <ul className="flex flex-wrap  items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                  <a href="https://www.instagram.com/r3llikfoto/" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6 ">Instagram</a>
              </li>
              <li>
                  <a href="https://www.linkedin.com/in/atikp/" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6">LinkedIn</a>
              </li>
              <li>
                  <a href="https://github.com/atikp" target="_blank" rel="noreferrer" className="hover:underline">Github</a>
              </li>
              
          </ul>
      </footer>
  )
}