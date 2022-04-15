// try simple example to test jasmine configuration

const myFunc = (num: number): number => {
    return num * num;
  };
  
export default myFunc;

// try simple example to test express (building the server) configuration
import express from 'express';
import routes from './routes/index';
import logger from './utilities/logger';

const app = express(); // create an application object
const port = 3000;

// define a route handler for the default home page : create an endpoint
app.use('/api',routes);

//use middlewares
app.get('/api/countries',logger,(req,res)=>{
  res.send('countries');
});
app.get('/api/cities',logger,(req,res)=>{
  res.send('cities');
});
app.get('/api/ociens',(req,res)=>{
  res.send('ociens');
});

// start the express server : listen on port
app.listen(port,()=>{
  console.log(`server started at http://localhost:${port}`);
});