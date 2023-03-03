import Ball from "./Ball.js"
import Paddle from "./Paddle.js"

const ball = new Ball(document.getElementById("ball"))
/* selecting ball html element, creating new class for ball, now can use it here  */
const playerPaddle = new Paddle(document.getElementById("player-paddle"))
const computerPaddle = new Paddle(document.getElementById("computer-paddle"))
const playerScoreElem = document.getElementById("player-score")
const computerScoreElem = document.getElementById("computer-score")

let lastTime
function update(time) {
    /* how much time has passed from a previous frame to a new frame*/
  if (lastTime != null) {
    const delta = time - lastTime
     /*update code if we have a lastTime, if no lastTime nothing to compare too */
    ball.update(delta, [playerPaddle.rect(), computerPaddle.rect()])
   /* update and passing it into the delta, all movesments in the game are based on the delta */
    computerPaddle.update(delta, ball.y)
    const hue = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--hue")
    )

    document.documentElement.style.setProperty("--hue", hue + delta * 0.01)

    if (isLose()) handleLose()
  }

  lastTime = time
  window.requestAnimationFrame(update)
}

function isLose() {
  const rect = ball.rect()
  return rect.right >= window.innerWidth || rect.left <= 0
}

function handleLose() {
  const rect = ball.rect()
  if (rect.right >= window.innerWidth) {
    playerScoreElem.textContent = parseInt(playerScoreElem.textContent) + 1
  } else {
    computerScoreElem.textContent = parseInt(computerScoreElem.textContent) + 1
  }
  ball.reset()
  computerPaddle.reset()
}

document.addEventListener("mousemove", e => {
  playerPaddle.position = (e.y / window.innerHeight) * 100
  /*e/y = vaule between 0 and 1. vaule between 0 and 100 */
})

window.requestAnimationFrame(update)
/* update loop, everytime it changes on screen it will be called  */