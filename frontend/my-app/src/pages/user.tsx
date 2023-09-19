import React from "react";
import { useEffect, useState } from "react";
import Header from "./component/header";
import Info from "./component/footer";
export function User() {
  const[user,setuser]=useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3001/user");
        const result = await response.json();
        console.log(result);
        setuser(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
      <>
        <Header/>
        <h1 className="text-center mt-4 text-2xl font-semibold">User Info</h1>
        <hr className="mt-5" />

        <div className=" ml-[1%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
         {user.map((item:any)=>(
  
<div className="mt-8" key={item.id}>
        
          <h1 className="text-xl mt-2 justify-center font-semibold">{item.name}</h1>
          <h1 className="text-xl mt-2 justify-center font-semibold">{item.email}</h1>
          <h1 className="text-xl mt-2 justify-center font-semibold">{item.password}</h1>
       

       </div>

         ))}
        

       </div>
       <Info/>
        
      </>


  )}
  export default User;