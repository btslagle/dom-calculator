const screen = document.querySelector("#screen")
const buttons = document.querySelectorAll("span")
const clear = document.querySelector("#clear")

buttons.forEach(button => {
    button.addEventListener("click", event => {
        if (button.textContent == "÷") {
            screen.textContent += "/"
        }
        if (button.textContent == "x") {
            screen.textContent += "*"
        }
        if (button.textContent === "C") {
            screen.textContent = ""
        }
        if (button.textContent !== "÷" && button.textContent !== "=" && button.textContent !== "x" && button.textContent !== "C") {
            screen.textContent += button.textContent
        }
    })
})