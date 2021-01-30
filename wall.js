class Wall{
    constructor(x,y,width,height){
        var opt = {
            restitution:0.5,
            friction:0,
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,opt);
        World.add(world,this.body);
        this.x = x;
        this.width = width;
        this.height = height;

    }
    display(){
        var pos  = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("red");
        strokeWeight(1);
        stroke("green");
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}