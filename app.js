//========================
//Set Requirements
//========================
var express = require("express");
const app   = express();
var port = process.env.PORT || 3000


//========================
//Get Route
//========================
app.get (
    "/me", async (req, res)=> 
    { try{
      response = await fetch ("https://catfact.ninja/fact");
      if (!response.ok){
       throw new 
        Error  ('Fetch failed:'+ response.status)
      }
      output   ={
        status: "success",
        user : {
            email: "bahoodade33@gmail.com",
            name : "Bello Dahood A",
            stack: "Node.JS/Express"},
        timestamp: new Date().toISOString()
        }
    

      output.fact     = (await response.json()).fact;
      // console.log (typeof output);
    
      res.json(output);
      console.log("API successfully delivered to the endpoint!")
        } 
    catch (err){
        console.error("Error:", err.message);
        return res.status(500).send("Error fetching data");
     }}
) 

  app.listen (port || 3000, ()=>
    { console.log("Server running on port: " + port)});