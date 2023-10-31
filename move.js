let y = 10; let r = 200; g = 180; b = 0;
let ned = true;
let rystet = 0;
let flyttet = 0;
let tal = 5;

function setup() {
    canvas = createCanvas(300, 550);
    textSize(24);
    // giver canvas border på 2 pixel, 
    // og sørger derefter for at kanten tælles med i width
    canvas.elt.style.border = '5px solid black';
    canvas.elt.style.boxSizing = 'border-box';
    canvas.elt.style.borderRadius = '20px';

    //canvas.parent('#beholder');
    // gør canvas-elementet responsivt til skærmbredden
    canvas.elt.style.width = '100%';
    canvas.elt.style.height = '100%';

    //bemærk at noden skal pakkes ud via .elt
    //const parentDiv = select('#beholder').elt;
    //const p = select('#test1').elt;
    // indsæt canvas i ny position i rækkefølgen af elementer i div'en beholder
    //parentDiv.insertBefore(canvas.elt, p);
    //let overskrift = document.querySelector('#tal');
    //console.log(overskrift);
}

function draw() {
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
    
text('TAL ' + str(rystet*5), 100, height-300);
}
