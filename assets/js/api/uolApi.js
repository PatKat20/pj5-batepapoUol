const urlEnter = () => `https://mock-api.driven.com.br/api/v6/uol/participants`

const apiMethods = {}

apiMethods.enterChat = (participant) =>{
    const participantEnter = {
        name: participant
    }
    axios.post("https://mock-api.driven.com.br/api/v6/uol/participants " , participantEnter)

}

export { apiMethods }