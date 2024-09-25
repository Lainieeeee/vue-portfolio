document.addEventListener('DOMContentLoaded', function () {
    const players = document.querySelectorAll('.youtubePlyr');

    players.forEach(function (element) {
        new Plyr(element);
    });
});