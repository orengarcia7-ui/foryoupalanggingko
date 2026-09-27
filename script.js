const opening = document.getElementById("opening");
const main = document.getElementById("main");
const openButton = document.getElementById("openButton");

const music = document.getElementById("backgroundMusic");
const musicControl = document.getElementById("musicControl");

let isPlaying = false;


/*
 * MUSIC ONLY STARTS AFTER THE USER TAPS
 * THE OPEN BUTTON.
 */
openButton.addEventListener("click", function () {

    // Start music after user interaction
    music.currentTime = 45;
    music.volume = 0.6;

    music.play()
        .then(() => {
            isPlaying = true;
            musicControl.textContent = "♫";
        })
        .catch(() => {
            isPlaying = false;
        });

    // Open the letter
    opening.classList.add("hidden");

    setTimeout(() => {
        main.classList.add("show");
    }, 450);

    // Show music control
    musicControl.classList.add("show");
});


/*
 * MUSIC PLAY / PAUSE BUTTON
 */
musicControl.addEventListener("click", function () {

    if (music.paused) {

        music.play()
            .then(() => {
                isPlaying = true;
                musicControl.textContent = "♫";
            })
            .catch(() => {});

    } else {

        music.pause();
        isPlaying = false;
        musicControl.textContent = "♪";

    }

});


/*
 * EXTRA PROTECTION:
 * MUSIC DOES NOT AUTOPLAY ON PAGE LOAD.
 */
window.addEventListener("load", function () {
    music.pause();
    music.currentTime = 0;
});