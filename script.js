
const el = document.querySelectorAll('#lety');


let allKeys = [],
 audio = new Audio('tunes/a.wav');


const playTune = (key) => {
  let audio = new Audio(`tunes/${key}.wav`);
audio.play();
// console.log(allKeys);
const clickedKey = document.querySelector(`[data-key="${key}"]`);
clickedKey.classList.add("active");
setTimeout(() => {
  clickedKey.classList.remove("active");
}, 150);
}

el.forEach(key => {
  allKeys.push(key.dataset.key)
  key.addEventListener('click', () => playTune(key.dataset.key))
  
})



const pressedKey =(e) => {
  if(allKeys.includes(e.key)) playTune(e.key);
}


document.addEventListener('keydown', pressedKey)