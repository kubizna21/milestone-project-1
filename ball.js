const INITIAL_VELOCITY = .025

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

    reset() {
        /* reset the properties*/
        this.x = 50
        this.y = 50
        this.direction = { x: 0 }
        while (Math.abs(this.direction.x) >= .2 || Math.abs(this.direction.x) >= .9) {
            const heading = randomNumberBetween(0, 2 * MathPI)
            this.direction = { x: Math.cos(heading), y: Math.sin(heading) }
        }
        this.velocity = INITIAL_VELOCITY

    }

    update(delta) {
        this.x = 5
        /* sets position of the ball to 5*/
        this.y = 15
    }
}

function randomNumberBetween(min, max) {
    return Math.random() * (max - min) + min
}