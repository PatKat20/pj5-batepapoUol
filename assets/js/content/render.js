import { utilsFunctions } from "../utils/utils.js"
import { apiMethods } from "../api/uolApi.js"

const convertArrayIntoMessages = (messageList) => {
    const userInformations = apiMethods.getUserLoggedInformation()
    return messageList.reduce((acc, message) => {
        if(message.type !== "private_message"){
            acc += `
                <li class="message ${message.type}Style" data-test="message">
                    <span class="data">(${message.time})</span> 
                    <strong>${message.from}</strong>
                    para 
                    <strong>${message.to}</strong>: 
                    <span class="messageDesc">${message.text}</span>
                </li> 
            `
        }
        else if (message.type === "private_message" && (userInformations.name === message.from || userInformations.name === message.to)) {
            acc += `
                <li class="statusPrivateMessage message" data-test="message">
                    <span class="data">(${message.time})</span> 
                    <strong>${message.from}</strong> 
                    para 
                    <strong>${message.to}</strong>: 
                    <span class="messageDesc">${message.text}</span>
                </li> 
            `
        }
        return acc
    }, "")

}

const convertArrayIntoUsers = (userList) => {
    return userList.reduce((acc, user) => {
        acc += `
         <li class="onlinePerson" onclick="insertEventOnClick(this)" data-test="participant">
            <ion-icon name="person-circle"></ion-icon> 
            <span class="checkmarkArea">${(user.name).split(" ")[0]} 
            <ion-icon name="checkmark-sharp" class="checkmark" data-test="check"></ion-icon>
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