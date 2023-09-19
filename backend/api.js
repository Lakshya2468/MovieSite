const express = require("express");
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const app = express(); 
const port = 3001;

app.use(cors()); 
app.use(express.json());


app.get("/movie",async(req,res)=>{
    const movie = await prisma.movie.findMany();
    res.json(movie);

} )

app.get("/user",async(req,res)=>{
    const user = await prisma.user.findMany();
    res.json(user);

} )

app.get("/series",async(req,res)=>{
    const Series = await prisma.series.findMany();
    res.send(Series);
} )
app.get("/watchlater",async(req,res)=>{
    const later = await prisma.watchlater.findMany();
    res.send(later);
} )

app.post("/signup",async(req,res)=>{
    const {name,email,password}=req.body;
  

     await prisma.user.create({
        data:{
            name,
            email,
            password
        },
    });

    res.send(name);
})

app.post("/watchlater",async(req,res)=>{
    
    const {img,title,rating}=req.body;
  
    console.log(req.body)
     await prisma.watchlater.create({
        data:{
            img,
            title,
            rating
        },
    });

    res.send(title);
})



app.delete("/movie/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const existingMovie = await prisma.watchlater.findUnique({
        where: { id: parseInt(id) },
      });
  
      if (!existingMovie) {
        return res.status(404).json({ error: 'Movie not found' });
      }
  
      await prisma.watchlater.delete({
        where: { id: parseInt(id) },
      });
  
      return res.status(204).send(); // Return a 204 No Content response upon successful deletion.
    } catch (error) {
      console.error("Error deleting movie:", error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });
  

app.listen(port,()=>{
    console.log("server started");
})