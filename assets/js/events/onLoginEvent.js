import { apiMethods } from "../api/uolApi.js"

const btnEnter = document.getElementById("btnEnter")

function startEvents(){
    btnEnter.addEventListener("click", _=>{
        const userName = document.getElementById("nickNameInput")
        apiMethods.enterChat(userName.value)
    })
}

export { startEvents }