
export default function({
  btnPlay,
  btnStop,
  plus,
  minus,
  btnForest,
  btnRain,
  btnCoffee,
  btnFire,
  btnForestClick,
  btnRainClick,
  btnCoffeeClick,
  btnFireClick,
  countdown,
  stopTimer,
  addFive,
  outFive,
  handleClick,
  btnForestSound,
  btnCoffeeSound,
  btnRainSound,
  btnFireSound,
  toggleBtn,
  volumeBarForest,
  volumeBarCoffee,
  volumeBarFire,
  volumeBarRain,
  volumeBarForestClick,
  volumeBarCoffeeClick,
  volumeBarFireClick,
  volumeBarRainClick,
  lightMode,
  darkMode,
  darkModeOff,
  darkModeOn
}) {
  
  btnPlay.onclick = () => {
  countdown()
  plus.toggleAttribute('disabled')
  minus.toggleAttribute('disabled')
}

btnStop.onclick = () => {
  stopTimer()
  plus.removeAttribute('disabled')
  minus.removeAttribute('disabled')
}

plus.onclick = addFive
minus.onclick = outFive

btnForest.onclick = function(e) {
  let clickForest = e.target
  if(clickForest == volumeBarForest) {return}
  handleClick(e)
  btnForestSound()
  btnForestClick.classList.remove("hide")
}

btnForestClick.onclick = function(e) {
  let clickForest = e.target
  if(clickForest == volumeBarForestClick) {return}
  btnForestSound()
  toggleBtn(btnForest, btnForestClick)
}

btnRain.onclick = (e) => {
  let clickRain = e.target
  if(clickRain == volumeBarRain) {return}
  handleClick(e)
  btnRainSound()
  btnRainClick.classList.remove("hide")
}

btnRainClick.onclick = (e) => {
  let clickRain = e.target
  if(clickRain == volumeBarRainClick) {return}
  btnRainSound()
  toggleBtn(btnRain, btnRainClick)
}

btnCoffee.onclick = (e) => {
  let clickCoffee = e.target
  if(clickCoffee == volumeBarCoffee) {return}
  handleClick(e)
  btnCoffeeSound()
  btnCoffeeClick.classList.remove('hide')
}

btnCoffeeClick.onclick = (e) => {
  let clickCoffee = e.target
  if(clickCoffee == volumeBarCoffeeClick) {return}
  btnCoffeeSound()
  toggleBtn(btnCoffee, btnCoffeeClick)
}

btnFire.onclick = (e) => {
  let clickFire = e.target
  if(clickFire == volumeBarFire) {return}
  handleClick(e)
  btnFireSound()
  btnFireClick.classList.remove('hide')
}

btnFireClick.onclick = (e) => {
  let clickFire = e.target
  if(clickFire == volumeBarFireClick) {return}
  btnFireSound()
  toggleBtn(btnFire, btnFireClick)
}

lightMode.onclick = () => {
  darkModeOn()
}

darkMode.onclick = () => {
  darkModeOff()
}
}