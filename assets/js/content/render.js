import { utilsFunctions } from "../utils/utils.js"
import { apiMethods } from "../api/uolApi.js"

const convertArrayIntoMessages = (messageList) => {
    const userInformations = apiMethods.getUserLoggedInformation()
    return messageList.reduce((acc, message) => {
        if (message.type === "status") {
            acc += `
                <p class="statusMessageEnter message"><span class="data">(${utilsFunctions.getData()})</span> <strong>${(message.from).split(" ")[0]}</strong> para <strong>${message.to}</strong>: <span class="messageDesc">${message.text}</span></p> 
            `
        } else if (message.type === "message") {
            acc += `
                <p class="statusMessageLogin message"><span class="data">(${utilsFunctions.getData()})</span> <strong>${(message.from).split(" ")[0]}</strong> para <strong>${message.to}</strong>: <span class="messageDesc">${message.text}</span></p> 
            `
        }
        else if (message.type === "private_message" && (userInformations.name === message.from || userInformations.name === message.to)) {
            acc += `
                <p class="statusPrivateMessage message"><span class="data">(${utilsFunctions.getData()})</span> <strong>${(message.from).split(" ")[0]}</strong> para <strong>${message.to}</strong>: <span class="messageDesc">${message.text}</span></p> 
            `
        }
            
        
        return acc
    }, "")

}

const convertArrayIntoUsers = (userList) => {
    return userList.reduce((acc, user) => {
        acc += `
         <li class="onlinePerson" onclick="insertEventOnClick(this)">
            <ion-icon name="person-circle"></ion-icon> 
            <span class="checkmarkArea">${(user.name).split(" ")[0]} 
            <ion-icon name="checkmark-sharp" class="checkmark"></ion-icon>
            </span>
         </li>
        `
        return acc
    }, "")
    
}

function insertMessages(messages) {
    const messageArea = document.querySelector(".messageArea")
    messageArea.innerHTML = messages
    const lastMessage = document.querySelector(".message:last-child")
    lastMessage.scrollIntoView()
}

export { convertArrayIntoMessages, convertArrayIntoUsers , insertMessages}