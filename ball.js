export default class Ball {
    constructor(ballElem) {
        this.ballElem = ballElem
        /*corresponds to the ball, ballElem passed in ball class to use and interact with the ball    */    
    }

    get x() {
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--x"))
    }

    set x(value) {
        this.ballElem.style.setProperty("--x", value)
    }

    get y() {
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--y"))
    }

    set y(value) {
        this.ballElem.style.setProperty("--y", value)
    }

    update(delta) {
        this.x = 5
        this.y = 15
    }
}