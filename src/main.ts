import "./style.css"

console.log("hallöle")

const hiBtn = document.getElementById("hiBtn") as HTMLButtonElement
const divInnerHTML = document.getElementById("divInnerHTML") as HTMLDivElement

hiBtn.addEventListener("click", () => {
  hiBtn.innerHTML = ""
  divInnerHTML.innerHTML = ""

  divInnerHTML.innerHTML = "Hi"
})
