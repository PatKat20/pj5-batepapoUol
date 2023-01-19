import { apiMethods } from "../api/uolApi.js"
import { utilsFunctions } from "../utils/utils.js";
import { onFailRequest, onSuccessRequest } from "../api/requestsResponse.js";
import { message } from "./modalEvents.js";

const btnEnterLogin = document.getElementById("btnEnter")
const buttonSend = document.getElementById("buttonSend")
const messageInput = document.getElementById("messageInput")

const peopleBtn = document.getElementById("peopleButton");
const onlinePeopleArea = document.querySelector(".onlinePeopleArea")
const blur = document.querySelector(".blur");


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
        if(e.key === "Enter"){
            apiMethods.sendMessage(messageInput.value, message.type, message.userTo);
            messageInput.value = "";
        }
    })

    buttonSend.addEventListener("click" , _=>{
        apiMethods.sendMessage(messageInput.value, message.type, message.userTo);
        messageInput.value = "";
    })

    peopleBtn.addEventListener("click" , _=>{
        document.body.style.overflow = "hidden"
        blur.classList.toggle("hide")
        if(onlinePeopleArea.classList.contains("hideWithEffect")){
            onlinePeopleArea.classList.toggle("hideWithEffect")
            onlinePeopleArea.classList.toggle("showWithEffect")
        }
    })

    blur.addEventListener("click", _=>{
        document.body.style.overflow = "initial"
        blur.classList.toggle("hide")
        if(onlinePeopleArea.classList.contains("showWithEffect")){
            onlinePeopleArea.classList.toggle("hideWithEffect")
            onlinePeopleArea.classList.toggle("showWithEffect")
        }
    })

}

export { startEvents }

