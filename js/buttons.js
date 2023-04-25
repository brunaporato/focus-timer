export default function buttons ({
  updateDisplay,
  newMinutes,
  minutesDisplay,
  secondsDisplay
}) {
  let timerOn

  function countdown() {

  let seconds = Number(secondsDisplay.textContent)
  let minutes = Number(minutesDisplay.textContent)
  let isOver = minutes <= 0 && seconds <= 0

  timerOn = setTimeout(function() {

    if(isOver) {
      return
    }

    if(seconds <= 0){
      seconds = 60
      minutes--
    }

    updateDisplay(minutes, String(seconds - 1))
    countdown()
  }, 1000)

}

function addFive() {
 newMinutes = Number(minutesDisplay.innerText) + 5
 if(newMinutes > 60) {
  newMinutes = Number(minutesDisplay.innerText)
  return
 }

 updateDisplay(newMinutes, 0)
}

function stopTimer() {
  clearTimeout(timerOn)
  updateDisplay(newMinutes, 0)
}

function outFive() {
  newMinutes = Number(minutesDisplay.innerText) - 5
  if(newMinutes < 0) {
    newMinutes = Number(minutesDisplay.innerText)
    return
  }
  updateDisplay(newMinutes, 0)
}

return {
  countdown,
  addFive,
  outFive,
  stopTimer,
}
}
