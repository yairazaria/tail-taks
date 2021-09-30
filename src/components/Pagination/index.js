import React, { useContext, useEffect } from "react";
import { getNumberOfPages } from '../../AirTableApi'
import { StoreContext } from "../../context/StoreContext";

const Pagination = () => {
  const { numberOfPages, userInPage, setUserInPage, setNumberOfPages } = useContext(StoreContext);

  const styleTheCurrentPage = index => index === userInPage ? 'z-10 border-indigo-500  text-indigo-600' : 'bg-white border-gray-300 text-gray-500';
  
  const getNumOfPages = async () => {
      const maxOfItems = await getNumberOfPages();
      const numOfPages =
        ((maxOfItems / 6) % 2 === 0)
          ? maxOfItems / 6
          : Math.ceil(maxOfItems / 6);
        
        const arrayOfPagesElements = Array.from({ length : numOfPages }, (_,i) => i +1);
        setNumberOfPages(arrayOfPagesElements);
  };


  useEffect(() => getNumOfPages(),[])



  return (
      
    <div className=" absolute right-0 left-0 bottom-0 bg-white px-4 py-3 flex items-center justify-center  hidden  sm:flex ">
      <nav
        className="flex justify-center relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
        aria-label="Pagination"
      >
        <a
        onClick={() => userInPage !== 1 ? setUserInPage(userInPage => userInPage-1) : ''}
        className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          <span className="sr-only">Previous</span>
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        {numberOfPages?.length > 0 ? numberOfPages.map((index) =>(
        <a onClick={() => setUserInPage(index)} className={`${styleTheCurrentPage(index)} hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium`}>
          {index}
        </a>
       )) : '....'
        }
        <a
        onClick={() => userInPage !== numberOfPages.length ? setUserInPage(userInPage => userInPage + 1) : ''}
        className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          <span className="sr-only">Next</span>
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </nav>
    </div>

  );
};

export default Pagination;
