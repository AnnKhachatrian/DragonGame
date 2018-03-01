function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

let step = 0;
var dragon = document.getElementById("dragon");
window.addEventListener("keydown", EventListener);

function EventListener(event) {
    var buttomPos = parseInt(dragon.style.top);
    if (event.key == 'ArrowDown') {

        if (buttomPos !== 256) {
            step += 8;
            dragon.style.top = step + 'px';

        } else {
            dragon.style.top = buttomPos + 'px';
        }
    } else {
        if (buttomPos !== 8) {
            step -= 8;
            dragon.style.top = step + 'px';

        } else {
            dragon.style.top = buttomPos + 'px';
        }
    }
}

function creatElement(id) {
    var el = document.createElement("DIV");
    el.classList.add(id);
    el.id = id;

    let top = getRandomArbitrary(0, 160);

    // el.style.height = 150 + "px";
    el.style.top = parseInt(top) + "px";

    document.getElementById('gamePart').appendChild(el);

    function move() {
        var pos = 1200;
        var id = setInterval(frame, 10);

        function frame() {
            if (pos == 48) {
                clearInterval(id);
                el.parentNode.removeChild(el);

            } else {
                pos--;
                el.style.left = pos + 'px';
            }
            gameOver(el);
        }
    }
    move();
}

function gameOver(el) {
    if (el.style.left == '170px') {
        let computedEl = parseInt(el.style.top);
        let computedDragon = parseInt(dragon.style.top);
        if (computedEl + 50 <= computedDragon ||
            computedDragon + 50 <= computedEl
        ) {
            console.log('play');
        } else {
            alert('gameover');
        }
    }
}
var creatWall = setInterval(function() {
    creatElement('wall');
}, 2000);

// var creatCoin = setInterval(function() {
//     creatElement('coin');
// }, 3000);