import Player from "@vimeo/player";
var throttle = require("lodash.throttle");
// console.log(throttle);

const player = new Player(document.querySelector("iframe"));

player.on(
    "timeupdate",
    throttle((event) => {
        localStorage.setItem("videoplayer-current-time", event.seconds);
    }, 1000)
);

if (localStorage.getItem("videoplayer-current-time")) {
    player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
}
