function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

var scoreCantrol = function() {
    if (localStorage.getItem('record') !== null) {
        document.getElementById("record").innerHTML = localStorage.getItem('record');
    }
}


function creatNewElements(f, elName) {
    setInterval(function() {
        f(elName);
    }, 1000);
}
creatNewElements(creatElement, 'wall');

window.addEventListener("keydown", startGame);
let step = 0;

function startGame(event) {
    scoreCantrol();
    scoreStart();
    var dragon = document.getElementById("dragon");
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

// ushadir popopxel

function elPositonCantrol(el) {
    var pos = 1500;
    var id = setInterval(elMove, 10);

    function elMove() {
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
    elPositonCantrol(el);
}


//SCORE
var scoreStart = (function() {
    var i = 0;
    return function() {
        setInterval(function() {
            i++;
            document.getElementById("current").innerHTML = i;

        }, 300);
        return i;
    }
})();


function scoreFinish() {
    var current = document.getElementById('current').innerHTML;
    if (localStorage.getItem('record') < current) {
        localStorage.setItem('record', current);
        document.getElementById("record").innerHTML = current;
    }
}

function gameOver(el) {
    if (el.style.left == '170px') {
        let computedEl = parseInt(el.style.top);
        let computedDragon = parseInt(dragon.style.top) + 67;
        if (computedDragon >= computedEl && computedDragon <= computedEl + 150) {
            alert('djkdj');
            scoreFinish();
        }
    }
}

// var creatWall = setInterval(function() {
//     creatElement('wall');
// }, 1000);