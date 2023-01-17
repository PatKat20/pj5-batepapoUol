import { apiMethods } from "../api/uolApi.js"
import { utilsFunctions } from "../utils/utils.js";
import { onFailRequest, onSuccessRequest } from "../api/requestsResponse.js";

const btnEnterLogin = document.getElementById("btnEnter")

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
}

export { startEvents }
