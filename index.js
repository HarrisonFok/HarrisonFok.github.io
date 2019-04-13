function moveImage() {
    var image = document.getElementById("mypicdiv");

    var pos = 0;
    var move = setInterval(move, 10);
    function move() {
        if (pos == 250) {
            clearInterval(move);
            image.style.position = fixed;
        } else {
            pos++;
            image.style.left = pos + 'px';
        }
    }
}