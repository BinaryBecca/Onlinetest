import "./style.css"

console.log("hallöle")

const hiBtn = document.getElementById("hiBtn") as HTMLButtonElement
const divInnerHTML = document.getElementById("divInnerHTML") as HTMLDivElement

hiBtn.addEventListener("click", () => {
  divInnerHTML.innerHTML = "Hi"
})

console.log("hi1")
