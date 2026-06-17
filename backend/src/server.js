import express from "express"
import {ENV} from "./lib/env.js"

const app = express()

app.get("/", (req, res) => {

})

app.listen(ENV.PORT, () => {
    console.log("Server running on the port:" , ENV.PORT)
})

