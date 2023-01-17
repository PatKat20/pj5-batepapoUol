import { startEvents } from "./events/onLoginEvent.js";

startEvents()

setInterval(() =>{
    apiMethods.getMessages()
}, 3000)