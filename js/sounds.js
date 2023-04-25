export default function() {
  const forestAudio = new Audio("audios/Floresta.wav")
  const rainAudio = new Audio ("audios/Chuva.wav")
  const coffeeAudio = new Audio ("audios/Cafeteria.wav")
  const fireAudio = new Audio ("audios/Lareira.wav")

  function stopAll() {
    forestAudio.pause()
    rainAudio.pause()
    coffeeAudio.pause()
    fireAudio.pause()
  }

  forestAudio.loop = true
  rainAudio.loop = true
  coffeeAudio.loop = true
  fireAudio.loop = true

  return {
    forestAudio,
    rainAudio,
    coffeeAudio,
    fireAudio,
    stopAll
  }
}