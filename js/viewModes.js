export default function({
  toggleBtn,
  darkMode,
  lightMode,
  minutesDisplay,
  secondsDisplay,
  timeDisplay
}) {

  const body = document.querySelector("body")

  const darkSvg = document.querySelector('#darkmode path')
  const lightSvg = document.querySelector('#lightmode path')
  let svg = document.querySelectorAll('svg path')

  function darkBtns(){
  if(lightMode.classList.contains('hide')){
  document.body.style.setProperty('--clicked-color', '#0A3442')
  document.body.style.setProperty('--button-color', '#29292E')}
  else {
  document.body.style.setProperty('--clicked-color', '#02799D')
  document.body.style.setProperty('--button-color', '#E1E1E6')
  }
}

function whiteElement(elementOne, elementTwo, elementThree) {
  elementOne.style.color = 'white'
  elementTwo.style.color = 'white'
  elementThree.style.color = 'white'
}


function darkModeOn() {
  body.style.backgroundColor = "#121214"
  toggleBtn(darkMode, lightMode)
  darkBtns()
  for (let i = 0; i < svg.length; i++) {
    svg[i].setAttribute('fill', '#C4C4CC')
  }

  darkSvg.setAttribute('fill', 'white')
  
  whiteElement(minutesDisplay, secondsDisplay, timeDisplay)
  document.body.style.setProperty('--slider-color', 'white')
}

function darkModeOff() {
  body.style.backgroundColor = "white"
  toggleBtn(darkMode, lightMode)
  darkBtns()
  
  for (let i = 0; i < svg.length; i++) {
    svg[i].setAttribute('fill', '#323238')
  }

  lightSvg.setAttribute('fill', 'black')

  minutesDisplay.style.color = '#323238'
  secondsDisplay.style.color = '#323238'
  timeDisplay.style.color = '#323238'

  document.body.style.setProperty('--slider-color', '#323238')
}

return {
  darkModeOff,
  darkModeOn
}
}