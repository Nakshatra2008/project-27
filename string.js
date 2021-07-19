

class String {

    constructor(bodyA, bodyB, offsetX, offsetY) {
        // console.log(bodyA.y - bodyB.y)
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            length: 200,
            pointB: { x: this.offsetX, y: this.offsetY }

        }
        this.body = Constraint.create(options);
        World.add(world, this.body)


    }
    display() {
        if (this.body.bodyA) {
            var A = this.body.bodyA.position;
            var B = this.body.bodyB.position;
            // console.log(A)
            push();
            strokeWeight(4);
            stroke("white")
            line(A.x, A.y, B.x + this.offsetX, B.y + this.offsetY)
            pop();
        }
    }
}
