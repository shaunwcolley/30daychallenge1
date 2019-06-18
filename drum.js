const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  // reaches into document selects element with tag audio and data key value that was clicked and assigns value to constant audio
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
  if(!audio) return; // stops function
  audio.currentTime = 0; //starts audio play over again
  audio.play();
  key.classList.add('playing');
}

const removeTransition = (e) => {
  if(e.propertyName !== 'transform') return; // skip if not a transform event
  e.target.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
