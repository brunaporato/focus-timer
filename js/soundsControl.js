import Sounds from "./sounds.js"
const sounds = Sounds()

export default function({
  btnForestClick,
  btnCoffeeClick,
  btnRainClick,
  btnFireClick,
  cards,
  cardsClick,
  volumeBarForestClick,
  volumeBarCoffeeClick,
  volumeBarFireClick,
  volumeBarRainClick
}) {
  
  function btnForestSound() {
  let isSelected = btnForestClick.classList.contains('hide')

  if(isSelected) {
  sounds.forestAudio.play()
  } else {
  sounds.forestAudio.pause()
  }
}

function btnRainSound() {
  let isSelected = btnRainClick.classList.contains('hide')

  if(isSelected) {
  sounds.rainAudio.play()
  } else {
  sounds.rainAudio.pause()
  }
}

function btnCoffeeSound() {
  let isSelected = btnCoffeeClick.classList.contains('hide')

  if(isSelected) {
  sounds.coffeeAudio.play()
  } else {
  sounds.coffeeAudio.pause()
  }
}

function btnFireSound() {
  let isSelected = btnFireClick.classList.contains('hide')

  if(isSelected) {
  sounds.fireAudio.play()
  } else {
  sounds.fireAudio.pause()
  }
}

const clearCards = () => {
  for (const card of cardsClick) {
    card.classList.add("hide")
  }
  for (const card of cards) {
    card.classList.remove('hide')
  }
}

const setActiveButton = (e) => {
  let currentCard = e.target;
  sounds.stopAll()
  clearCards()
  currentCard.classList.add('hide')
}

const handleClick = (e) => {
  setActiveButton(e)
}


volumeBarForestClick.addEventListener('change', function(){
  sounds.forestAudio.volume = this.value / 100
})

volumeBarRainClick.addEventListener('change', function(){
  sounds.rainAudio.volume = this.value / 100
})

volumeBarCoffeeClick.addEventListener('change', function(){
  sounds.coffeeAudio.volume = this.value / 100
})

volumeBarFireClick.addEventListener('change', function(){
  sounds.fireAudio.volume = this.value / 100
})


return {
handleClick,
btnCoffeeSound,
btnFireSound,
btnForestSound,
btnRainSound
}
}