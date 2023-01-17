import { startEvents } from "./events/listenerEvents.js";
import { apiMethods } from "./api/uolApi.js"


startEvents()

setInterval(() =>{
    apiMethods.updateOnlineUsers()
    apiMethods.getMessages()
}, 3000)