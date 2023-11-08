let rystet = 0;
let sidsteKlik = 0;

const mq = window.matchMedia("(max-width: 480px)");

function setup() {
    pixelDensity(1);
    canvas = createCanvas((mq.matches) ? windowWidth : (windowHeight) / 20 * 10.5, (windowHeight));
    canvas.elt.style.border = '5px solid black';
    canvas.elt.style.boxSizing = 'border-box';
    canvas.elt.style.borderRadius = '20px';

 
    canvas.elt.style.width = '100%';
    canvas.elt.style.height = '100%';

    document.getElementsByClassName("beholder")[0].appendChild(canvas.elt);
    
}



function draw() {
    console.log(windowWidth, windowHeight);
    resizeCanvas((mq.matches) ? windowWidth : (windowHeight) / 20 * 10.5, (windowHeight));
    background(173, 216, 230);
    if (accelerationX > 70 && millis() - sidsteKlik > 200) {
        rystet += 5;
        sidsteKlik = millis();
    }

    textSize(47)
    text("5 TABELLEN", width/2, 220);
    text("VÆLG EN TABEL", width/2, 120);
    text("GÅ UDENFOR!", width/2, 50);
    textSize(20)
    text("Ryst telfeonen mens du tæller 5 tabellen", width/2, 550);

    textSize(100)
    textAlign(CENTER, CENTER);  
    text(str(rystet), width/2, height/2);
    if(rystet > 50)
    rystet = 0
}

function windowResized() {
    resizeCanvas(mq.matches) ? windowWidth : (windowHeight) / 20 * 10.5, (windowHeight);
}
