let red = document.getElementById("carRed");
let red1 = document.getElementById("carRed1");
let red2 = document.getElementById("carRed2");
let yellow = document.getElementById("car");
let over = document.getElementById("over");
let road = document.getElementById("road");
let score = document.getElementById("score1");
let counter=0;
document.addEventListener("keydown", ev => {
    if (ev.keyCode === 38) {
        left();
    }
    if (ev.keyCode === 40) {
        right();
    }
})

function left() {
    let offsetTop = yellow.offsetTop;
    if (offsetTop > 50) {
        yellow.style.top = (offsetTop - 100 + "px").toString();
        yellow.style.transition = "0.5s";
    }

}

function right() {
    let offsetTop = yellow.offsetTop;
    if (offsetTop < 350) {
        yellow.style.top = (offsetTop + 100 + "px").toString();
        yellow.style.transition = "0.5s";
    }
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

let isAlive = setInterval(function () {
    let yelTop = yellow.offsetTop;
    let redTop = red.offsetTop;
    let redTop1 = red1.offsetTop;
    let redTop2 = red2.offsetTop;
    let yelLeft = yellow.offsetLeft;
    let redLeft = red.offsetLeft;
    let redLeft1 = red1.offsetLeft;
    let redLeft2 = red2.offsetLeft;
    let isOver = false;
    if (yelTop - redTop < 120 && -yelLeft + redLeft < 250 && redLeft - yelLeft > -300) {
        isOver = true;
    } else if (yelTop - redTop1 < 120 && yelTop - redTop1 > -120 && redLeft1 - yelLeft < 250 && redLeft1 - yelLeft > -300) {
        isOver = true;
    } else if (yelTop - redTop2 < 120 && yelTop - redTop2 > -120 && redLeft2 - yelLeft < 250 && redLeft2 - yelLeft > -300) {
        isOver = true;
    }
    if (isOver === true) {
        over.style.display = "inline-block";
        road.style.display="none";
        score.innerText="Your score is " + counter;
    }

    if (redLeft <= - 393 || redLeft1 === - 380 || redLeft2=== -380){
        counter++;
    }

}, 1)


function replay(){
    road.style.display="block"
    over.style.display="none"
}