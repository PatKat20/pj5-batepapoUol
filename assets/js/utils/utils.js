const utilsFunctions = {}

utilsFunctions.toggleLoader = () => {
    const loader = document.getElementById("loader")
    loader.classList.toggle("hide");
}

utilsFunctions.toggleEnterInput = () => {
    const inputArea = document.querySelector(".inputArea")
    inputArea.classList.toggle("hide")
}

export { utilsFunctions }