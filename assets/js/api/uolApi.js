import { convertArrayIntoMessages , convertArrayIntoUsers, insertMessages} from "../content/render.js"
import { insertEventOnClick } from "../events/onPersonOnlineEvent.js"

const userLoggedInformation = {}

const apiMethods = {}

apiMethods.getUserLoggedInformation = () =>{
    return {...userLoggedInformation}
}

apiMethods.enterChat = (participant) =>{
    return axios.post("https://mock-api.driven.com.br/api/v6/uol/participants" , {name: participant})
}

apiMethods.updateUserLogged = (participant) =>{
    userLoggedInformation.name = participant;
    userLoggedInformation.online = true;
}

apiMethods.sendMessage = (message, typeMessage = "message", userTo = "Todos") =>{
    if(userLoggedInformation.name){
        const messageData = {
            from: userLoggedInformation.name,
            to: userTo,
            text: message,
            type: typeMessage // ou "private_message" para o bônus
        }
        axios.post("https://mock-api.driven.com.br/api/v6/uol/messages", messageData)
        .then(apiMethods.persistUser)
        .catch(() => {
            userLoggedInformation.online = false;
            alert("Você foi deslogado!")
            location.reload()
        })
    } else return
}

apiMethods.getMessages = () =>{
    axios.get("https://mock-api.driven.com.br/api/v6/uol/messages")
    .then(response => response.data)
    .then(convertArrayIntoMessages)
    .then(messages =>{ if(userLoggedInformation.online) insertMessages(messages)})
    .catch((error) => console.log(error.code))
}

apiMethods.persistUser = () =>{
    setInterval(() =>{
        axios.post("https://mock-api.driven.com.br/api/v6/uol/status", { name: userLoggedInformation.name })
        .catch(response => console.log(response.code))
    }, 5000)
}

apiMethods.updateOnlineUsers = () =>{
    const ul = document.querySelector(".onlinePeople")
    axios.get("https://mock-api.driven.com.br/api/v6/uol/participants")
        .then(response => response.data)
        .then(convertArrayIntoUsers)
        .then(user => ul.innerHTML = user)
        .then(insertEventOnClick)
}

export { apiMethods }