class Circle {
    constructor(x, y, r, options = { }) {
        this.x = x;
        this.y = y;
        this.r = r;

        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);
    }

    render() {
        let pos = this.body.position;
        stroke(255,255,255);
        noFill();
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        ellipse(0, 0, this.r * 2);
        pop();
        noStroke();
    }

    isOffCanvas() {
        let pos = this.body.position;
        return (pos.y > height + 100) ? true : false;
    }

    removeFromWorld() {
        World.remove(world, this.body);
    }
}