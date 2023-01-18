const message = {}

function onclickPerson(){
    const selecionado = this.parentElement.querySelector(".selecionado")
    const example = document.querySelector(".example")

    message.userTo = this.innerText
    if(selecionado !== null){
        selecionado.classList.remove("selecionado")
        this.classList.toggle("selecionado")
    }else{
        this.classList.toggle("selecionado")
        example.classList.remove("selecionado")
    }

    console.log(message)
}

function createMessage(visibilityClicked){
    if(visibilityClicked.innerText !== "Público"){
        message.type = "private_message"
    }else{
        message.type="message"
    }
}

function visibilityEvent(){
    const selecionado = this.parentElement.querySelector(".selecionado")
    createMessage(this)
    if(selecionado !== null){
        selecionado.classList.remove("selecionado")
        this.classList.toggle("selecionado")
    }else{
        this.classList.toggle("selecionado")
    }
    console.log(message)
}

function insertEventOnClick(){
    const onlinePerson = document.querySelectorAll(".onlinePerson");
    onlinePerson.forEach(person => person.onclick = onclickPerson)
}

function insertEventOnVisuality(){
    const visualityItens = document.querySelectorAll(".visibilityI")
    visualityItens.forEach(visuality => visuality.onclick = visibilityEvent)
}


export { insertEventOnClick , insertEventOnVisuality, message}