import { startEvents } from "./events/listenerEvents.js";
import { apiMethods } from "./api/uolApi.js";
import {insertEventOnVisuality} from "./events/onPersonOnlineEvent.js";

startEvents()
insertEventOnVisuality()
setInterval(() =>{
    apiMethods.getMessages()
}, 3000)

setInterval(() =>{
    apiMethods.updateOnlineUsers()
},10 * 1000)