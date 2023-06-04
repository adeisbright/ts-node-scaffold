import app from "./app"; 
import infoLogger from "./common/logging/info-logger";

app.listen(3500 , () => {
    console.log("Server Started")
    infoLogger.log({
        level:"info",
        message:"Server Started on PORT 3500"
    })
})