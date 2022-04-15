// try simple example to test jasmine configuration

const myFunc = (num: number): number => {
    return num * num;
  };
  
export default myFunc;

// try simple example to test express (building the server) configuration
import express from 'express';
import routes from './routes/index';

const app = express(); // create an application object
const port = 3000;

// define a route handler for the default home page : create an endpoint
// app.get('/api',(req,res)=>{
//   res.send('Hello World!');
// });
app.use('/api',routes);
// start the express server : listen on port
app.listen(port,()=>{
  console.log(`server started at http://localhost:${port}`);
});