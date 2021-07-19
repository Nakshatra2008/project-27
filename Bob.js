class Bob {
    constructor(x, y) {
        var options = {
            'isStatic': false,
            'restitution': 1,
            'friction': 0.3,  //0.3
            'density': 0.8  //0.8
        }

        this.body = Bodies.circle(x, y, 20, options)
        World.add(world, this.body)
    }

    display() {
        var pos = this.body.position
        push()
        ellipseMode(RADIUS)
        fill("red");
        ellipse(pos.x, pos.y, 20, 20);
        pop()


    }


}

