import express from "express";
import {ENV} from "./lib/env.js";
import path from "path";
import cors from "cors";
import { serve } from "inngest/express";

const app = express();
const __dirname = path.resolve();

// middleware
app.use(express.json());
// credentials: true ? => server allows a browser to include cookies on request
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true}));

app.use("/api/inngest", serve({ client: inngest, functions }) )

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
