class Paper {
    constructor(x,y,r){
       var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':0,
            'density':1.2
        }
        this.r = r;
        this.x = x;
        this.y = y;
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,options);
        //this.body.scale = 0.3
        World.add(world, this.body);

    }
  
    display(){
        var paperPos = this.body.position;
        push();
        translate(paperPos.x,paperPos.y);
        rectMode(CENTER)
        fill(255,255,0)
        imageMode(CENTER);

        image(this.image,0,0,this.r,this.r)
        
        pop();
    }
  }