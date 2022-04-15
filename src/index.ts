// try simple example to test jasmine configuration

const myFunc = (num: number): number => {
    return num * num;
  };
  
export default myFunc;

// try simple example to test express (building the server) configuration
import express from 'express';
const app = express(); // create an application object
const port = 3000;

// define a route handler for the default home page : craete an endpoint
app.get('/api',(req,res)=>{
  res.send('Hello World!');
});

// start the express server : listen on port
app.listen(port,()=>{
  console.log(`server started at http://localhost:${port}`);
});