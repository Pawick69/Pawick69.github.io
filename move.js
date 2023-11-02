let rystet = 0;
let tal = 5;
let sidsteKlik = 0;

const mq = window.matchMedia("(max-width: 480px)");

function setup() {
    canvas = createCanvas((mq.matches) ? windowWidth : (windowHeight - 100) / 20 * 10.5, (windowHeight - 100));
    canvas.elt.style.border = '5px solid black';
    canvas.elt.style.boxSizing = 'border-box';
    canvas.elt.style.borderRadius = '20px';

 
    canvas.elt.style.width = '100%';
    canvas.elt.style.height = '100%';

    document.getElementsByClassName("beholder")[0].appendChild(canvas.elt);
    pixelDensity(1);
}



function draw() {
    console.log(windowWidth, windowHeight);
    resizeCanvas((mq.matches) ? windowWidth : (windowHeight - 100) / 20 * 10.5, (windowHeight - 100));
    background(173, 216, 230);
    if (accelerationX > 70 && millis() - sidsteKlik > 500) {
        rystet += 5;
        sidsteKlik = millis();
    }

    textSize(50)
    text("5 TABELLEN", width/2, 100);

    textSize(100)
    textAlign(CENTER, CENTER);  
    text(str(rystet), width/2, height/2);
    if(rystet > 50)
    rystet = 0
}

function windowResized() {
    resizeCanvas(mq.matches) ? windowWidth : (windowHeight - 100) / 20 * 10.5, (windowHeight - 100);
}
