import { utilsFunctions } from "../utils/utils.js"

const convertArrayIntoMessages = (messageList) => {
    let acc = ""
    for (let i = messageList.length - 30; i < messageList.length; i++) {
        if (messageList[i].type === "status") {
            acc += `
            <p class="statusMessageEnter message"><span class="data">(${utilsFunctions.getData()})</span> <strong>${messageList[i].from}</strong> para <strong>${messageList[i].to}</strong>: ${messageList[i].text}</p> 
            `
        } else if (messageList[i].type === "message") {
            acc += `
                <p class="statusMessageLogin message"><span class="data">(${utilsFunctions.getData()})</span> <strong>${messageList[i].from}</strong> para <strong>${messageList[i].to}</strong>: ${messageList[i].text}</p> 
            `
        }
    }
    return acc
}

const convertArrayIntoUsers = (userList) => {
    return userList.reduce((acc, user) =>{
        acc += `
         <li><ion-icon name="person-circle"></ion-icon> ${user.name}</li>
        `
        return acc
    }, "")
    
}

export { convertArrayIntoMessages , convertArrayIntoUsers }