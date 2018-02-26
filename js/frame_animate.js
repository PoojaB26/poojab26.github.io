var $element = $('.eye-animation');
var imagePath = 'img/';
var totalFrames = 14;
var animationDuration = 2000;
var timePerFrame = animationDuration / totalFrames;
var timeWhenLastUpdate = void 0;
var timeFromLastUpdate = void 0;
var frameNumber = 2;

// 'step' function will be called each time browser rerender the content
// we achieve that by passing 'step' as a parameter to the 'requestAnimationFrame' function
function step(startTime) {
    // 'startTime' is provided by requestAnimationName function, and we can consider it as current time
    // first of all we calculate how much time has passed from the last time when frame was update
    if (!timeWhenLastUpdate) timeWhenLastUpdate = startTime;
    timeFromLastUpdate = startTime - timeWhenLastUpdate;

    // then we check if it is time to update the frame
    if (timeFromLastUpdate > timePerFrame) {
        // and update it accordingly
        $element.attr('src', imagePath + ('animation-' + frameNumber + '.jpg'));
        // reset the last update time
        timeWhenLastUpdate = startTime;

        // then increase the frame number or reset it if it is the last frame
        if (frameNumber >= totalFrames) {
            frameNumber = 2;
        } else {
            frameNumber = frameNumber + 1;
        }
    }

    requestAnimationFrame(step);
}

// create a set of hidden divs
// and set their background-image attribute to required images
// that will force browser to download the images
$(document).ready(function () {
    for (var i = 2; i < totalFrames + 1; i++) {
        $('body').append('<div id="preload-image-' + i + '" style="background-image: url(\'' + imagePath + 'animation-' + i + '.jpg\');"></div>');
    }
});

// wait for images to be downloaded and start the animation
$(window).on('load', function () {
    requestAnimationFrame(step);
});