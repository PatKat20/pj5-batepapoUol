const userLoggedInformation = {}

const apiMethods = {}

apiMethods.enterChat = (participant) =>{
    return axios.post("https://mock-api.driven.com.br/api/v6/uol/participants" , {name: participant})
}

export { apiMethods }