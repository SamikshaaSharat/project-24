class Dustbin{
    constructor(x,y,width,height){
        var options={
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
        
        }
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        this.width=width;
        this.height=height;
        World.add(world, this.body);
        
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("green");
    rect(pos.x,pos.y,this.width,this.height);
    pop();
        
    }

}
        
    
