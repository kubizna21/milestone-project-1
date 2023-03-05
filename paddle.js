const SPEED = 0.02
/*computers maximum speed for the ball 
why isnt this working*/

export default class Paddle {
  constructor(paddleElem) {
    this.paddleElem = paddleElem
    this.reset()
  }

  get position() {
    return parseFloat(
      getComputedStyle(this.paddleElem).getPropertyValue("--position")
    )
  }

  set position(value) {
    this.paddleElem.style.setProperty("--position", value)
  }

  rect() {
    return this.paddleElem.getBoundingClientRect()
  }

  reset() {
    this.position = 50
  }

  update(delta, ballHeight) {
    this.position += SPEED * delta * (ballHeight - this.position)
    /*if the ball is above current position it would go upward and if its below current position it would move downward
    when ball moves too fast the computer will no longer be able to keep up with it */
  }
}