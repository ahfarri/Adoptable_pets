const express = require("express");
const app = express();
const cookies = require("cookie-parser");
const cors = require('cors') 
const port = 8000;
app.use(cors({
    credentials:true,
    origin: "http://localhost:3000"
}));
app.use( express.json() ); //tells my app that it can parse json
app.use(cookies());
app.use('/static',express.static("images")) //tells the application which folder to serve images from


require("./server/config/config");

require("./server/routes/pets.routes")(app)
require("./server/routes/comments.routes")(app)
require("./server/routes/users.routes")(app)



//app.listen needs to be at the end of the file
app.listen( port, () => console.log(`Listening on port: ${port}`) );