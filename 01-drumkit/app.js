(function () {
    'use strict';

    function playSound(event){

        // Find visual key element
        const key = document.querySelector(`div[data-key="${event.keyCode}"]`);

        if (!key) return;

        // Find associated audio element
        const audio = document.querySelector(`audio[data-sound="${key.getAttribute('data-sound')}"]`);

        if (!audio) return;

        key.classList.add('playing');
        audio.currentTime = 0; // Rewind audio if playing already
        audio.play();
    }

    function removeTransition(event) {
        if (event.propertyName !== 'transform') return;
        event.target.classList.remove('playing');
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playSound);
})();1
