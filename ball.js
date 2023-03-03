const INITIAL_VELOCITY = 0.025
/* making it a constant variable*/
const VELOCITY_INCREASE = 0.00001
/*increase the balls speed */

export default class Ball {
  constructor(ballElem) {
    this.ballElem = ballElem
    /*corresponds to the ball, ballElem passed in ball class to use and interact with the ball */

    this.reset()
  }

  get x() {
    return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--x"))
  }

  set x(value) {
    this.ballElem.style.setProperty("--x", value)
    /*value gets passed in through x */
  }

  get y() {
    return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--y"))
  }

  set y(value) {
    this.ballElem.style.setProperty("--y", value)
    /*value gets passed in through y */
  }

  rect() {
    return this.ballElem.getBoundingClientRect()
    /*bounces off the top and bottom of the screen */
  }

  reset() {
      /* reset the properties*/
    this.x = 50
    this.y = 50
    /*creating a value for x and y, */
    this.direction = { x: 0 }
    while (
      Math.abs(this.direction.x) <= 0.2 ||
      Math.abs(this.direction.x) >= 0.9
      /* moves ball far enough left or right, absolute vaule  */
    ) {
      const heading = randomNumberBetween(0, 2 * Math.PI)
      /*heading in the rotation, PI = 360degress in radians,   */
      this.direction = { x: Math.cos(heading), y: Math.sin(heading) }
      /*with radians I am able to use cosine and sine to determine the x and y direction */
    }
    this.velocity = INITIAL_VELOCITY
  }

  update(delta, paddleRects) {
    this.x += this.direction.x * this.velocity * delta
    this.y += this.direction.y * this.velocity * delta
    this.velocity += VELOCITY_INCREASE * delta
    /*the ball will increase speed */
    const rect = this.rect()

    if (rect.bottom >= window.innerHeight || rect.top <= 0) {
      this.direction.y *= -1
      /*when the ball goes hits the top of the page it bounces down and when the ball hits the bottom of the page it bounces up */
    }

    if (paddleRects.some(r => isCollision(r, rect))) {
      this.direction.x *= -1
    }
  }
}

function randomNumberBetween(min, max) {
  return Math.random() * (max - min) + min
/*random number between 0 and 1, scale the vaule in the range, and the min is lowest number it can get   */
}

function isCollision(rect1, rect2) {
  return (
    rect1.left <= rect2.right &&
    rect1.right >= rect2.left &&
    rect1.top <= rect2.bottom &&
    rect1.bottom >= rect2.top
  )
}