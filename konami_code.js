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

function init() {
let body = document.querySelector('body');
  let i = 0;
  body.addEventListener('keydown', function(key){

      if(key.key === codes[i] && key.key != codes[codes.length-1]){
        i++;
      }else if (key.key === codes[i] && i === codes.length-1) {
        alert("You did it!");
      }else{
        i = 0
      }
    });
}
