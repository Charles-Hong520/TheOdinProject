


function playSound(ev) {
  const audio = document.querySelector(`audio[code="${ev.code}"]`);
    
  if(!audio) return;
  const key = document.querySelector(`.key[id="${ev.code}"]`);
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
  setTimeout(() => {
    key.classList.remove('playing');
  }, audio.duration*1000);
}


function test(ev) {
  console.log(ev.target);
  const ct = ev.currentTarget;
  const id = ct.getAttribute('id');
  const audio = document.querySelector(`audio[code="${id}"]`);
  audio.currentTime = 0;
  audio.play();
  ct.classList.add('playing');
  setTimeout(() => {
    ct.classList.remove('playing');
  }, audio.duration*1000);
}


window.addEventListener('keydown', playSound);

var divs = document.querySelectorAll(".key");
for(var i = 0; i < divs.length; i++){
  divs[i].addEventListener('click',test);
}

