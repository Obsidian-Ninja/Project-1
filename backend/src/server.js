import express from "express";
import {ENV} from "./lib/env.js";
import path from "path";

const app = express();
const __dirname = path.resolve();

app.get("/", (req, res) => {

})

// Make our app ready for production
if(ENV.NODE_ENV === "production"){
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("/{*any}", (req,res) => {
    // We get this dist folder after running npm run build in frontend folder
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
})

} 

const startServer = async () => {
    try{
        await connectDB();
        app.listen(ENV.PORT, () => console.log("Server running on the port:" , ENV.PORT));
    }
    catch{
        console.log("Error running the server");
    }
   
}
startServer()
