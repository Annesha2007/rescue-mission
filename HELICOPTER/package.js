class box{
    constructor(x, y){
        var options={
            isStatic: true
        }
    
        this.body= Bodies.rectangle(x, y, 90, 20, options);
        World.add(world, this.body);
    }
    
    display1(){
        var pos=this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, 90, 20);
    }
    }