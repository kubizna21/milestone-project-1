import Ball from "./Ball.js"

const ball = new Ball(document.getElementById("ball"))
/* selecting ball html element, creating new class for ball, now can use it here  */

let lastTime
function update(time) {
    /* how much time has passed from a previous frame to a new frame*/
    if (lastTime !=null) {
        const delta = time - lastTime
        /*update code if we have a lastTime, if no lastTime nothing to compare too */
        ball.update(delta)
        /* update and passing it into the delta, all movesments in the game are based on the delta */

    }

    lastTime = time
    window.requestAnimationFrame(update)

}

window.requestAnimationFrame(update)
/* update loop, everytime it changes on screen it will be called  */

