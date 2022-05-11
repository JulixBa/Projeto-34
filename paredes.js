class walls{

    constructor(x, y, w, h) {
        
        let options = {
            isStatic:false
        };

        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);

        
    }
    Show() {
        
        var predio = this.body.position

        push();
        rectMode(CENTER);
        stroke(255);
        fill(127);
        rect(predio.x, predio.y, this.w, this.h);
        pop();
        display();
   }

}

