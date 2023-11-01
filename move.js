let y = 10;
let ned = true;
let rystet = 0;
let tal = 5;

const mq = window.matchMedia("(max-width: 480px)");

function setup() {
    canvas = createCanvas((windowHeight - 140) / 20 * 10.5, (windowHeight - 140));
    canvas.elt.style.border = '5px solid black';
    canvas.elt.style.boxSizing = 'border-box';
    canvas.elt.style.borderRadius = '20px';

 
    canvas.elt.style.width = '100%';
    canvas.elt.style.height = '100%';

    document.getElementsByClassName("beholder")[0].appendChild(canvas.elt);
    pixelDensity(1);
}



function draw() {
    resizeCanvas((mq.matches) ? windowWidth : (windowHeight - 100) / 20 * 10.5, (windowHeight - 100));
    background(173, 216, 230);
    if (ned)
        y++;
    else
        y--;
    if (y >= height || y <= 0)
        ned = !ned;
    if (accelerationX > 70) {
        
        if(rystet%2 == 0)
        ned = !ned;
        rystet++;
    }
    textSize(50)
    text("5 TABELLEN", width/2, 100);

    textSize(100)
    textAlign(CENTER, CENTER);  

    text(str(rystet*5), width/2, height/2);
}
