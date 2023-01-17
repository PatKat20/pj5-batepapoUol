import { utilsFunctions } from "../utils/utils.js"
import { apiMethods } from "./uolApi.js"

const onSuccessRequest = (response) => {
    if (response.status === 200) {
        
        document.querySelector(".loginPage").style.zIndex = "-2"
        document.querySelector(".messagePage").style.zIndex = "1"
        const userInfo = JSON.parse(response.config.data)
        apiMethods.atualizeUserLogged(userInfo.name)
    }
}

const onFailRequest = () =>{
    utilsFunctions.toggleEnterInput()
    utilsFunctions.toggleLoader()
    apiMethods.atualizeUserLogged("")
    alert("O usuário já está logado, por favor insira outro nome")
}

export { onSuccessRequest, onFailRequest}