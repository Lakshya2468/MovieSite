import React from "react";
import Header from "./component/header";
import { useState } from "react";
import { useEffect } from "react";
import Info from "./component/footer";
export default function Watchlater() {
    const[movies,setmovies]=useState([]);
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch("http://localhost:3001/watchlater");
            const result = await response.json();
            console.log(result);
            setmovies(result);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
    
        fetchData();
      }, []);


      const handleDelete = async (id:any) => {
        try {
         
          await fetch(`http://localhost:3001/movie/${id}`, {
            method: "DELETE",
          });
    
          const updatedmovie = movies.filter((item:any) => item.id !== id);
          setmovies(updatedmovie);
        } catch (error) {
          console.error("Error deleting movie:", error);
        }
      };

return(
<>
<Header/>

<h1 className="text-center mt-4 text-2xl font-semibold">Watch Later</h1>
    <hr className="mt-5" />

    <div className="ml-[4%] grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
      {movies.map((item:any) => (
        <div className="mt-8" key={item.id}>
          <img src={item.img} alt="" />
          <h1 className="text-xl mt-2 justify-center font-semibold">
            {item.title}
          </h1>
          <h1 className="mt-1">{item.rating}</h1>
          <button
            className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
         
          >
            Play
          </button>
          <button  onClick={() => handleDelete(item.id)}
        
            className="bg-red-500 mt-2 ml-3 hover:bg-gray-700 text-white py-1 px-2 rounded-full"
          >
            Remove
          </button>
        </div>
      ))}
    </div>

<Info/>
</>


)


}