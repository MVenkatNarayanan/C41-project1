class Drops{
    constructor(x,y,r){
        var options={
            friction:0.5,
            isStatic:true
        }
        this.r=r;
        this.body=Bodies.rectangle(x,y,r,options);
        this.dropImg=loadImage("images/thunderbolt/1.png","images/thunderbolt/2.png","images/thunderbolt/3.png","images/thunderbolt/4.png");
        World.add(world,this.body);
    }
 
    display(){
       
        push();
     
       image(this.dropImg,520,300,10,10);
       if(this.body.position.y>height){
           Matter.Body.setPosition(thus.drops,{x:random(0,400),y:random(0,400)})
       }
        pop();
    }


}