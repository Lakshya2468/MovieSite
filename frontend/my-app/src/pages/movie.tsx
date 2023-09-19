import React from "react";
import { useEffect, useState } from "react";
import Header from "./component/header";
import Info from "./component/footer";
export function Movie() {
  const[movies,setmovies]=useState<any>([]);
  const [moviename, setmoviename] = useState("");
  const [movieimg, setmovieimg] = useState("");
  const [movierating, setmovierating] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3001/movie");
        const result = await response.json();
        console.log(result);
        setmovies(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);


  const handleWatchLater = async () => {
    try {
      await fetch("http://localhost:3001/watchlater", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          img:movieimg ,
          title: moviename,
           rating:movierating
        }),
      });
    } catch (error) {
      console.error("Error adding movie to watch later:", error);
    }
  };

  return (
    <>
    <Header />
    <h1 className="text-center mt-4 text-2xl font-semibold">Movies</h1>
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
            onClick={() => {
              console.log(item.title)
              setmoviename(item.title)
              setmovieimg(item.img)
              setmovierating(item.rating)

            }}
          >
            Play
          </button>
          <button
            onClick={ () => {
              setmoviename(item.title)
              setmovieimg(item.img)
              setmovierating(item.rating)
               handleWatchLater()
            }}
            className="bg-gray-500 mt-2 ml-3 hover:bg-green-700 text-white py-1 px-2 rounded-full"
          >
            Watch Later
          </button>
        </div>
      ))}
    </div>
    <Info/>
  </>
 
);
}
  export default Movie;

