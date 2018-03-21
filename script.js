function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

let step = 0;
var dragon = document.getElementById("dragon");
window.addEventListener("keydown", EventListener);


//TIME
var i = 0;
var time;

function score(param) {
    if (param == 'start') {
        time = setInterval(function() {
            document.getElementById("result").innerHTML = i++;
        }, 500);
    } else {
        clearInterval(time);
    }
}


function EventListener(event) {
    score('start');
    var buttomPos = parseInt(dragon.style.top);
    if (event.key == 'ArrowDown') {
        if (buttomPos !== 256) {
            step += 8;
            dragon.style.top = step + 'px';

        } else {
            dragon.style.top = buttomPos + 'px';
        }
    } else {
        if (buttomPos !== 8 && step !== 0) {
            step -= 8;
            dragon.style.top = step + 'px';

        } else {
            dragon.style.top = buttomPos + 'px';
        }
    }
}


function move(el) {
    var pos = 1500;
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

function creatElement(id) {
    var el = document.createElement("DIV");
    el.classList.add(id);
    el.id = id;

    let top = getRandomArbitrary(0, 160);
    el.style.top = parseInt(top) + "px";

    document.getElementById('gamePart').appendChild(el);
    move(el);
}

function gameOver(el) {
    if (el.style.left == '170px') {
        let computedEl = parseInt(el.style.top);
        let computedDragon = parseInt(dragon.style.top) + 67;
        if (computedDragon >= computedEl && computedDragon <= computedEl + 150) {
            alert('gameover');
            score('end');
        }
    }
}

var creatWall = setInterval(function() {
    creatElement('wall');
}, 2000);