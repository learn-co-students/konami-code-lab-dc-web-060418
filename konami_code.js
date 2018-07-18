// const codes = [
//   "ArrowUp",
//   "ArrowUp",
//   "ArrowDown",
//   "ArrowDown",
//   "ArrowLeft",
//   "ArrowRight",
//   "ArrowLeft",
//   "ArrowRight",
//   "b",
//   "a"
// ];

function init() {
  let page = document.body
  let konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight","b", "a"]
  let index = 0

  let keydownHandler = function(e) {
    const key = e.key

    if (key === konamiCode[index]) {
      index ++
      if (index === konamiCode.length) {
        alert("KODE MASTER")
        index = 0
      }
    } else {
      index = 0
    }
  }

  page.addEventListener('keydown', keydownHandler)
}
