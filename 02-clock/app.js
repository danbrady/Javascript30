(function () {
    'use strict';

    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    function getDegreesIn60Increments(value) {
        return ((value / 60) * 360) + 90;
    }

    function getDegrees12Increments(value) {
        return ((value / 12) * 360) + 90;
    }

    // Remove transition duration when 59->0 to avoid reverse degree animation
    function resetTransitionDuration(timeDimension, element) {
        element.style.transitionDuration = (timeDimension === 0) ? '0s' : '';
    }

    function setDate() {
        const date = new Date();
        const seconds = date.getSeconds();
        const minutes = date.getMinutes();
        const hours = date.getHours();

        resetTransitionDuration(seconds, secondHand);
        resetTransitionDuration(minutes, minuteHand);
        resetTransitionDuration(hours, hourHand);

        secondHand.style.transform = `rotate(${getDegreesIn60Increments(seconds)}deg)`;
        minuteHand.style.transform = `rotate(${getDegreesIn60Increments(minutes)}deg)`;
        hourHand.style.transform = `rotate(${getDegrees12Increments(hours)}deg)`;
    }

    setInterval(setDate, 1000);
})();
