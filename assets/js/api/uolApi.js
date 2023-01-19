import { convertArrayIntoMessages , convertArrayIntoUsers, insertMessages} from "../content/render.js"
import { insertEventOnClick } from "../events/modalEvents.js"

const userLoggedInformation = {}

const apiMethods = {}

// Método para pegar uma cópia das informações do usuário logado
apiMethods.getUserLoggedInformation = () =>{
    return {...userLoggedInformation}
}

// Método para entrar no chat
apiMethods.enterChat = (participant) =>{
    return axios.post("https://mock-api.driven.com.br/api/v6/uol/participants" , {name: participant})
}

// Método de atualização do objeto UserInformations
apiMethods.updateUserLogged = (participant) =>{
    userLoggedInformation.name = participant;
    userLoggedInformation.online = true;
}

// Método para enviar mensagem ao servidor
apiMethods.sendMessage = (message, typeMessage = "message", userTo = "Todos") =>{
    if(userLoggedInformation.name){
        const messageData = {
            from: userLoggedInformation.name,
            to: userTo,
            text: message,
            type: typeMessage 
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

// Método para pegar as mensagens do servidor e inserir na tela
apiMethods.getMessages = () =>{
    axios.get("https://mock-api.driven.com.br/api/v6/uol/messages")
    .then(response => response.data)
    .then(convertArrayIntoMessages)
    .then(messages =>{ if(userLoggedInformation.online) insertMessages(messages)})
    .catch((error) => console.log(error.code))
}

// Método para manter o usuário logado
apiMethods.persistUser = () =>{
    setInterval(() =>{
        axios.post("https://mock-api.driven.com.br/api/v6/uol/status", { name: userLoggedInformation.name })
        .catch(response => console.log(response.code))
    }, 5000)
}

// Método para atualizar o número de usuários logados e inserir no modal
apiMethods.updateOnlineUsers = () =>{
    const ul = document.querySelector(".onlinePeople")
    axios.get("https://mock-api.driven.com.br/api/v6/uol/participants")
        .then(response => response.data)
        .then(convertArrayIntoUsers)
        .then(user => { if(userLoggedInformation.online) ul.innerHTML = user })
        .then(insertEventOnClick)
}

export { apiMethods }