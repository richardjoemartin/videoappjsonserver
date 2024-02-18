//import json-server
const jsonServer = require('json-server')
//create  a server for json file
const mediaPlayerServer = jsonServer.create()
//set up a path for json file
const router = jsonServer.router('db.json')
//return a middleware used by json-server
const middlewares = jsonServer.defaults()
//set up port foer json server
const port = 4000 || process.env.port
//use middleware and router in server
mediaPlayerServer.use(middlewares)
mediaPlayerServer.use(router)
//to Listen server for resolving request from  server
mediaPlayerServer.listen(port,()=>{
    console.log(`mediaplayer listening at port ${port} and waiting for client request !!`);
})