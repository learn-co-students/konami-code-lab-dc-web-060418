const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0;
function init() {
  document.body.addEventListener('keydown', function(e) {
    if (e.key === codes[index++]) {
      if (index === codes.length) {
        window.alert("YAYAYA");
        index = 0;
      }
    } else {
      console.log("Bad key: " + e.key);
      index = 0;
    }
  });
}
