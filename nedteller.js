const output = document.querySelector('#output')
const start = document.querySelector('#start')
const reset = document.querySelector('#reset')
const add = document.querySelector('#add')
const sub = document.querySelector('#sub')
const container = document.querySelector('.buttons');

container.addEventListener('click', function(event) {
  const element = event.target;
  const outnum = output.textContent;
  if (outnum === "0"){
    output.textContent = element.textContent;
  }
  else {
    output.textContent += element.textContent;
  }
});


function countDown(id){
  if (output.textContent > 0){
    output.textContent -= 1;
  }
  else if (output.textContent === '0') {
    clearInterval(id);
  }
}

start.addEventListener('click', function(event) {
  let time = 1000; // ms
  const id = setInterval(() => countDown(id), time);

});

reset.addEventListener('click', function(event) {
  output.textContent = '0';
});
add.addEventListener('click', function(event) {
  output.textContent -= -1;
});
sub.addEventListener('click', function(event) {
  if (output.textContent > 0){
    output.textContent -=1;
  }
});
