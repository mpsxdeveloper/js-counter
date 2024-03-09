const result = document.querySelector("#result")

const addButton = document.querySelector(".add")
addButton.addEventListener("click", () => {
    result.innerHTML = parseInt(result.innerHTML) + 1
})

const minusButton = document.querySelector(".subtract")
minusButton.addEventListener("click", () => {
    result.innerHTML = parseInt(result.innerHTML) - 1
})