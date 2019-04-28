let mouseContraint;
let streams = [];

function setup() {
    let canvas = createCanvas(
        window.innerWidth / 1.15,
        window.innerHeight / 1.15
    );
    
    let cnvX = (windowWidth - width) / 2;
    let cnvY = (windowHeight - height) / 2;
    canvas.position(cnvX, cnvY);
    background(0);
    
    // rain stream
    let x = 0;
    for(let i = 0; i < width / STEP; i++) {
        let messageArr = i % 2 == 0 ? ['T','H','A','N','K','Y','O','U'] : ['A','L','I','N','A'];
        let stream = new Stream(messageArr);
        let topLimit = stream.totalSymbols * TEXTSIZE;
        let y = random(-1500, -topLimit);

        stream.generateSymbols(x, y);
        streams.push(stream);
        x += STEP;
    }

    // mouse constraint
    var mouse = Mouse.create(canvas.elt);
    mouse.pixelRatio = pixelDensity();

    mouseContraint = MouseConstraint.create(engine, { mouse: mouse });
    World.add(world, mouseContraint);
}

function draw() {
    background(0);
    streams.forEach((stream) => {
        stream.render();
    });
}
