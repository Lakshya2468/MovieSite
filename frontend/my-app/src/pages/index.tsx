import React from "react";
import {Header} from "./component/header";
import Info from "./component/footer";
import {Movie} from "./component/movie";


export default function Home() {


  return (
  <main>
     <Header/>
   
      <ul className="flex  mx-[15%] drop-shadow-xl justify-around flex-center py-3 font-medium text-gray-900 bg-blue-400 ">
        <li>
          <a href="http://localhost:3000/component/movie"  className="   text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Movie</a>
        </li>
        <li>
          <a href="http://localhost:3000/component/series" className="  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Series</a>
        </li>
        <li>
          <a href="#popular" className="  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Popular</a>
        </li>
        <li>
          <a href="#latest" className="   text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Latest</a>
        </li>
        
      </ul>


      <div className="flex justify-center py-12"  >
    
      <img src="https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5407501/cover/1920x77026cbe4fc27284de3baefd4f63aca74cf.jpg" alt="" />



      </div>

      
  <h1 className="text-2xl mt-10 text-center font-semibold" id="popular">Popular</h1>
  <hr className="mt-5" />
  <div className=" ml-[4%] grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        
  
<div className="mt-8">
          <img src="https://play-lh.googleusercontent.com/6fNz6J2eH5tr6Xi_2vERKOId0aoQrqUD7KAErS8cSbAKI4wul3JjAh8w4Tu9Jqp_XAJCf1veMU4DH8LhpQ=s256-rw" alt="" />
          <h1 className="text-xl mt-2 justify-center font-semibold">Mission: Impossible</h1>
          <h1 className="mt-1">4.9</h1>
          <button className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Play
</button>

       </div>
       <div className="mt-8">
          <img src="https://play-lh.googleusercontent.com/5efxbApfVAa9R1fStcVvSHqDhyXI40jLCd78b2NEuqNcC0McWceLAQGYnz0rFKZz7lywTdKNzfsXidP97A=s256-rw" alt="" />
          <h1 className="text-xl mt-2 justify-center font-semibold">John Wick 4</h1>
          <h1 className="mt-1">4.5</h1>
          <button className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Play
</button>

       </div>

       <div className="mt-8">
          <img src="https://play-lh.googleusercontent.com/zhK4JWCF9AYv_kzMQMQNZCLtKiQDP4HT78XrMZQI14glTZtd6pmapIRUS2aVqjR_lB0jp2y67bKOx-i-isU=s256-rw" alt="" />
          <h1 className="text-xl mt-2 justify-center font-semibold">The Flash</h1>
          <h1 className="mt-1">4.1</h1>
          <button className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Play
</button>

       </div>
       <div className="mt-8">
          <img src="https://play-lh.googleusercontent.com/pgIPG5puPWoGWg4O9ttT2SfYoCKItkkTVFH5eG3LFtfx_swy1GQpWB66boPUua0GMq6MrXZeNMHoTzZj2Dw=s256-rw" alt="" />
          <h1 className="text-xl mt-2 justify-center font-semibold">Meg 2</h1>
          <h1 className="mt-1">4.2</h1>
          <button className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Play
</button>

       </div>
       <div className="mt-8">
          <img src="https://play-lh.googleusercontent.com/WfgojteTa695fCjxWdpW7_6qFWN9PgZFFlNhJAj0gU9UM8sJR_GxlBwETlc_8Ja4vKsEqgH7THwr83tHOjw=s256-rw" alt="" />
          <h1 className="text-xl mt-2 justify-center font-semibold">Top Gun</h1>
          <h1 className="mt-1">4.6</h1>
          <button className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Play
</button>

       </div>
       <div className="mt-8">
          <img src="https://play-lh.googleusercontent.com/VgZ60UF3ZJ6D9_pOov2SILzVrBcqJmSwiswghJBKTOEKaK_iijF2NU72v74y9YxBVD4AVy7pvNYvdR7R6inG=s256-rw" alt="" />
          <h1 className="text-xl mt-2 justify-center font-semibold">Spider-man</h1>
          <h1 className="mt-1">4.8</h1>
          <button className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Play
</button>

       </div>



       </div>




           
  <h1 className="text-2xl mt-20 text-center font-semibold"id="latest">Latest</h1>
  <hr className="mt-5" />
  <div className=" ml-[4%] grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        
  
<div className="mt-8">
          <img src="https://play-lh.googleusercontent.com/VgZ60UF3ZJ6D9_pOov2SILzVrBcqJmSwiswghJBKTOEKaK_iijF2NU72v74y9YxBVD4AVy7pvNYvdR7R6inG=s256-rw" alt="" />
          <h1 className="text-xl mt-2 justify-center font-semibold">Spider-man</h1>
          <h1 className="mt-1">4.8</h1>
          <button className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Play
</button>

       </div>
       <div className="mt-8">
          <img src="https://play-lh.googleusercontent.com/5efxbApfVAa9R1fStcVvSHqDhyXI40jLCd78b2NEuqNcC0McWceLAQGYnz0rFKZz7lywTdKNzfsXidP97A=s256-rw" alt="" />
          <h1 className="text-xl mt-2 justify-center font-semibold">The Last Voyage of the Demeter</h1>
          <h1 className="mt-1">4.5</h1>
          <button className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Play
</button>

       </div>

       <div className="mt-8">
          <img src="https://play-lh.googleusercontent.com/jK3vNyr94KEgyvdInqyHaOWym9MJCAsqqXqS_nbrwgU1bRvcx5XoSqvl-WhevEJVj4jIB374273fH6r89w=s256-rw" alt="" />
          <h1 className="text-xl mt-2 justify-center font-semibold">The Flash</h1>
          <h1 className="mt-1">4.1</h1>
          <button className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Play
</button>

       </div>
       <div className="mt-8">
          <img src="https://play-lh.googleusercontent.com/Apxi4rgriI7Ysn8VifmJcaO7UpIM7DODSDiJt7rwPESBVu2sXxqmHKK57Z4Rd6nNJhQ=s256-rw" alt="" />
          <h1 className="text-xl mt-2 justify-center font-semibold">Fast and Furious 6</h1>
          <h1 className="mt-1">4.2</h1>
          <button className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Play
</button>

       </div>
       <div className="mt-8">
          <img src="https://play-lh.googleusercontent.com/d_dMfYlbSooxcgbBKt_r23Gtf4AvCASSK1m3WqCTZoPOPenYkkrJsXSvZgWtXMN8iK626DagU3yFvfPYqVM=s256-rw" alt="" />
          <h1 className="text-xl mt-2 justify-center font-semibold"> Gaurdians of the Galaxy</h1>
          <h1 className="mt-1">4.6</h1>
          <button className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Play
</button>

       </div>
       <div className="mt-8">
          <img src="https://play-lh.googleusercontent.com/5efxbApfVAa9R1fStcVvSHqDhyXI40jLCd78b2NEuqNcC0McWceLAQGYnz0rFKZz7lywTdKNzfsXidP97A=s256-rw" alt="" />
          <h1 className="text-xl mt-2 justify-center font-semibold">John Wick 4</h1>
          <h1 className="mt-1">4.5</h1>
          <button className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Play
</button>

       </div>
   
       </div>




       <h1 className="text-2xl mt-10 text-center font-semibold" id="popular">About Us</h1>
  <hr className="mt-5" />



  <section className="mt-4 bg-white-100">
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
                <p className="mt-4 text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                    eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
                    Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
                    malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.</p>
                <div className="mt-8">
                    <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
                        <span className="ml-2">&#8594;</span></a>
                </div>
            </div>
            <div className=" md:mt-0">
                <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image" className="object-cover rounded-lg shadow-md"/>
            </div>
        </div>
    </div>
</section>



<div className="contact">
      <Info />
      </div>

      
  </main>
  )
}

