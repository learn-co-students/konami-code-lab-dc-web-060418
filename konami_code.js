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
  // your code here
  document.body.addEventListener('keydown', function(e) {
    console.log(e.key);
    konamiListener(e);
  })
}

function konamiListener(e) {

  if (e.key === codes[index]) {
    index++;
    if (index === codes.length) {
      console.log("You've cracked the code!");
      alert("You've cracked the code!");
      index = 0;
    }
  };
}


