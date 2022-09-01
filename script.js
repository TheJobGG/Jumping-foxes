const input = document.querySelector('input')
const targets = document.querySelectorAll('.target')
const button = document.querySelector('.btn-restart');
let counter = 0;

function isChecked(e) {
  if (e.target.checked) {
    e.target.parentNode.style.animationName = "picked";
    e.target.parentNode.style.animationDelay = "0s";
    e.target.setAttribute('disabled', 'true')
    counter++;
  } else {
    e.target.parentNode.style.animationName = "blink";
  }
  if (counter == 4) {
    dropConfetti()
    button.classList.add('restart')
  }
}

targets.forEach(target => {
  target.addEventListener('click', isChecked);
})

function dropConfetti() {
  confetti({
    particleCount: 200,
    startVelocity: 50,
    drift: 0.25,
    spread: 150,
    gravity: 0.5,
    ticks: 600,
    origin: {
      x: 0.5,
      y: 1
    }
  });
}

function restartGame(e) {
  counter = 0;
  targets.forEach(
    target => {
      target.childNodes[1].removeAttribute('checked')
      target.childNodes[1].removeAttribute('disabled')
      target.childNodes[1].checked = false;
    }
  )
  targets[0].style.animationName = "blink";
  setTimeout(setAnimation(1), 100)
  setTimeout(setAnimation(2), 150)
  setTimeout(setAnimation(3), 270)
  button.classList.remove('restart')
}

button.addEventListener('click', restartGame);

function setAnimation(num){
  targets[num].style.animationName = "blink";
}