import Buttons from "./buttons.js"
import Sounds from "./sounds.js"
import SoundsControl from "./soundsControl.js"
import Events from "./events.js"
import Views from "./viewModes.js"

const btnPlay = document.querySelector("#play")
const btnStop = document.querySelector("#stop")
const plus = document.querySelector("#plus")
const minus = document.querySelector("#minus")

const btnForest = document.querySelector("#forest")
const btnRain = document.querySelector("#rain")
const btnCoffee = document.querySelector("#coffee")
const btnFire = document.querySelector("#fire")
const btnForestClick = document.querySelector('#forestclick')
const btnRainClick = document.querySelector("#rainclick")
const btnCoffeeClick = document.querySelector("#coffeeclick")
const btnFireClick = document.querySelector("#fireclick")

let cardsClick = document.querySelectorAll("#forestclick, #rainclick, #coffeeclick, #fireclick")
let cards = document.querySelectorAll("#forest, #rain, #coffee, #fire")



let minutesDisplay = document.querySelector("#minutes")
let secondsDisplay = document.querySelector("#seconds")
const timeDisplay = document.querySelector('#time')

const volumeBarForest = document.querySelector('#forest input')
const volumeBarRain = document.querySelector('#rain input')
const volumeBarCoffee = document.querySelector('#coffee input')
const volumeBarFire = document.querySelector('#fire input')

const volumeBarForestClick = document.querySelector('#forestclick input')
const volumeBarRainClick = document.querySelector('#rainclick input')
const volumeBarCoffeeClick = document.querySelector('#coffeeclick input')
const volumeBarFireClick = document.querySelector('#fireclick input')

const lightMode = document.querySelector(".light")
const darkMode = document.querySelector(".dark")

let newMinutes = 25

const buttons = Buttons ({
  updateDisplay,
  newMinutes,
  minutesDisplay,
  secondsDisplay
})

const sounds = Sounds()

const soundsControl = SoundsControl({
  btnForestClick,
  btnCoffeeClick,
  btnRainClick,
  btnFireClick,
  cards,
  cardsClick,
  volumeBarForestClick,
  volumeBarCoffeeClick,
  volumeBarFireClick,
  volumeBarRainClick,
})

function updateDisplay(newminutes, seconds) {
  minutesDisplay.textContent = String(newminutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function toggleBtn(button, clicked) {
  button.classList.toggle('hide')
  clicked.classList.toggle('hide')
}

const viewModes = Views({
  toggleBtn,
  darkMode,
  lightMode,
  minutesDisplay,
  secondsDisplay,
  timeDisplay
})


const events = Events({
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
  countdown: buttons.countdown,
  stopTimer: buttons.stopTimer,
  addFive: buttons.addFive,
  outFive: buttons.outFive,
  handleClick: soundsControl.handleClick,
  btnForestSound: soundsControl.btnForestSound,
  btnCoffeeSound: soundsControl.btnCoffeeSound,
  btnRainSound: soundsControl.btnRainSound,
  btnFireSound: soundsControl.btnFireSound,
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
  darkModeOff: viewModes.darkModeOff,
  darkModeOn: viewModes.darkModeOn
})
