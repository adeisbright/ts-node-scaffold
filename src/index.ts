import app from "./app"; 
import Config from "./config";

app.listen(Config.serverPort , () => {
    console.log(`Server Started on ${Config.serverPort}`)
})