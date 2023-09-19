import React from "react";
import { useEffect, useState } from "react";
import Header from "./header";
export function Movie() {
  const[series,setseries]=useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3001/series");
        const result = await response.json();
        console.log(result);
        setseries(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
      <>
        <Header/>
        <h1 className="text-center mt-4 text-2xl font-semibold">Series</h1>
        <hr className="mt-5" />

        <div className=" ml-[1%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
         {series.map((item:any)=>(
  
<div className="mt-8" key={item.id}>
          <img src={item.img} alt="" />
          <h1 className="text-xl mt-2 justify-center font-semibold">{item.title}</h1>
          <h1 className="mt-1">{item.rating}</h1>
          <button className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Play
</button>

       </div>

         ))}
        

       </div>
       
        
      </>


  )}
  export default Movie;