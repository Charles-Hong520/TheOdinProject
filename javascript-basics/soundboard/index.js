function stopTransition(ev) {
  const key = document.querySelector(`.key[code = "${ev.code}"]`);
  key.classList.remove('playing');
}


function playSound(ev) {
  const audio = document.querySelector(`audio[code="${ev.code}"]`);
    
  if(!audio) return;
  const key = document.querySelector(`.key[code="${ev.code}"]`);
  audio.play();
  audio.currentTime = 0;
  key.classList.add('playing');
}


window.addEventListener('keydown', playSound);
window.addEventListener('keyup', stopTransition);