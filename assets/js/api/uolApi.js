const userLoggedInformation = {}

const apiMethods = {}

apiMethods.enterChat = (participant) =>{
    return axios.post("https://mock-api.driven.com.br/api/v6/uol/participants" , {name: participant})
}

apiMethods.persistUser = () =>{
    setInterval(() =>{
        axios.post("https://mock-api.driven.com.br/api/v6/uol/status", { name: userLoggedInformation.name })
    }, 5000)
}


export { apiMethods }