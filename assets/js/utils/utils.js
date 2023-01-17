const utilsFunctions = {}

utilsFunctions.toggleLoader = () => {
    const loader = document.getElementById("loader")
    loader.classList.toggle("hide");
}

utilsFunctions.toggleEnterInput = () => {
    const inputArea = document.querySelector(".inputArea")
    inputArea.classList.toggle("hide")
}


function verifiyDigits(num){
    return num < 9 ? `0${num}` : num
}

utilsFunctions.getData = () => {
    const data = new Date()
    const hour = verifiyDigits(data.getHours())
    const minutes = verifiyDigits(data.getMinutes())
    return `${hour}:${minutes}`
}

export { utilsFunctions }