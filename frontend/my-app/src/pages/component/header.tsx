import { Result } from "postcss";
import React from "react";
import { useEffect, useState } from "react";



export function Header() {
  const[searchmovies,setsearchmovies]=useState([]);
  const[inputValue,setinput]=useState("");
  async function getvalue(){
    setsearchmovies([]);
   
    console.log(inputValue)
    const response = await fetch("http://localhost:3001/movie");
    const result = await response.json();
    console.log(result);
    let filteredData = result.filter((pd:any) => pd.title.toLowerCase().trim().includes(inputValue.toLowerCase().trim()))
    console.log({"filteredData":filteredData})
    setsearchmovies(filteredData);
  }


  


  return (
    
   <>
<nav className="bg-white border-gray-100 dark:bg-gray-900 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" className="flex items-center">
      <img src="https://static.vecteezy.com/system/resources/thumbnails/008/386/321/small/mm-or-m-initial-letter-logo-design-vector.jpg" className="h-13 w-20 mr-3" alt="movies Logo" />
      <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">MovieMatrix</span>
  </a>
  <div className="flex md:order-2">
    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
      <span className="sr-only">Search</span>
    </button>
    <div className="relative hidden md:block">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search icon</span>
        
      </div>
      
      <input type="text" value={inputValue} onChange={(e) => setinput(e.target.value)} id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
        
    </div>

    <button onClick={getvalue}  value="" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Search
</button>  

        
    


    <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
    <div className
    ="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
      <div className
      ="relative mt-3 md:hidden">
        <div className
        ="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className
          ="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
      </div>
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="http://localhost:3000" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="component/search" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
        </li>
        <li>
          <a href="component/contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact Us</a>
        </li>
        <li>
      
<div className="dropdown">
  <button className="dropbtn">
  <div className="hh"></div>
<div className="hh"></div>
<div className="hh"></div>
  </button>
  <div className="dropdown-content">
    <a href="component/signup"> Sign Up</a>
    <a href="component/watchlater">Watch Later</a>
    <a href="component/user">User Details</a>
    <a href="" className="bg-red-500">Log Out</a>
  </div>
</div>

        </li>
      </ul>
    </div>
  </div>
</nav>

<div className="ml-[4%] mb-2 flex grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {searchmovies.map((item:any) => (
          <div className="mt-8" key={item.id}>
            <img src={item.img} alt="" />
            <h1 className="text-xl mt-2 justify-center font-semibold">
              {item.title}
            </h1>
            <h1 className="mt-1">{item.rating}</h1>
            <button className="bg-blue-500 mt-2 hover.bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Play
            </button>
          </div>
        ))}
      </div>


</>

  )
}

export default Header;