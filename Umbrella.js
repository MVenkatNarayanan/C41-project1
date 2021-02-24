class Umbrella{
    constructor(x,y,r){
        var options={
            isStatic:false
        }
        this.r=r;
        this.body=Bodies.circle(x,y,r,options);
        this.boyImg=loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png");
        World.add(world,this.body);
    }
    display(){
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
       boy=addAnimation(this.boyImg,10,10);
        pop();

    }

}