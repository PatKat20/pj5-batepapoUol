const userLoggedInformation = {}

const apiMethods = {}

apiMethods.enterChat = (participant) =>{
    return axios.post("https://mock-api.driven.com.br/api/v6/uol/participants" , {name: participant})
}

apiMethods.atualizeUserLogged = (participant) =>{
    userLoggedInformation.name = participant
}
apiMethods.sendMessage = (message) =>{
    if(userLoggedInformation.name){
        const messageData = {
            from: userLoggedInformation.name,
            to: "Todos",
            text: message,
            type: "message" // ou "private_message" para o bônus
        }
        axios.post("https://mock-api.driven.com.br/api/v6/uol/messages", messageData)
        .then(apiMethods.persistUser)
        .catch(() => {
            alert("Você foi deslogado!")
            location.reload()
        })
        
    } else return
}

apiMethods.getMessages = () =>{
    const messageArea = document.querySelector(".messageArea")
    axios.get("https://mock-api.driven.com.br/api/v6/uol/messages")
    .then(response => response.data)
    .then(convertArrayIntoMessages)
    .then(messages => messageArea.innerHTML = messages)
    .then(() => {
        const lastMessage = document.querySelector(".message:last-child")
        lastMessage.scrollIntoView()
    })
    .catch((error) => console.log(error))
}


apiMethods.persistUser = () =>{
    setInterval(() =>{
        axios.post("https://mock-api.driven.com.br/api/v6/uol/status", { name: userLoggedInformation.name })
    }, 5000)
}


export { apiMethods }