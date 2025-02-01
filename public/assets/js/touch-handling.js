/**
 * Touch handling to let us deal with swiping left and right and long presses. 
 * 
 * Much of this was lifted from: https://www.geeksforgeeks.org/simple-swipe-with-vanilla-javascript/
 */

let initialTouchX, initialTouchY,
    finalTouchX, finalTouchY;
let swipeThreshold = 100;

function handleTouch(startX, endX,
    onSwipeLeft, onSwipeRight) {
    var horizontalDistance =
        finalTouchX - initialTouchX;
    var verticalDistance =
        finalTouchY - initialTouchY;

    if (Math.abs(horizontalDistance) >
        Math.abs(verticalDistance) &&
        Math.abs(horizontalDistance) >
        swipeThreshold) {
        if (finalTouchX -
            initialTouchX < 0) {
            onSwipeLeft();
        } else {
            onSwipeRight();
        }
    }
}


var swipeLeft = () => {
    document.getElementById('next-comic').click();
};

var swipeRight = () => {
    document.getElementById('prev-comic').click();
};


window.onload = function () {
    window.addEventListener
        ('touchstart', function (event) {
            initialTouchX =
                event.touches[0].clientX;
            initialTouchY =
                event.touches[0].clientY;
        });

    window.addEventListener
        ('touchend', function (event) {
            finalTouchX = event.
                changedTouches[0].clientX;
            finalTouchY = event.
                changedTouches[0].clientY;


            handleTouch(initialTouchX,
                finalTouchX, swipeLeft, swipeRight);
        });
};