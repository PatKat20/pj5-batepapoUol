import { apiMethods } from "../api/uolApi.js"
import { utilsFunctions } from "../utils/utils.js";
import { onFailRequest, onSuccessRequest } from "../api/requestsResponse.js";

const btnEnterLogin = document.getElementById("btnEnter")
const buttonSend = document.getElementById("buttonSend")
const messageInput = document.getElementById("messageInput")

function startEvents() {
    btnEnterLogin.addEventListener("click", e => {
        const nickName = document.getElementById("nickNameInput");
        if (!nickName.value) return
        utilsFunctions.toggleEnterInput()
        utilsFunctions.toggleLoader()
        apiMethods.enterChat(nickName.value)
            .then(onSuccessRequest)
            .catch(onFailRequest)
        e.preventDefault()
    })

    messageInput.addEventListener("keydown", e =>{
        if(e.keyCode === 13){
            setTimeout(() =>{
                apiMethods.sendMessage(messageInput.value)
                messageInput.value = ""
            }, 500)
        }
    })

    buttonSend.addEventListener("click" , _=>{
        setTimeout(() =>{
            apiMethods.sendMessage(messageInput.value)
            messageInput.value = ""
        }, 500)
    })

}

export { startEvents }
