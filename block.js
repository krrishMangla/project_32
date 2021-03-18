class Block
{
  constructor(x,y,width,height)
  {
    var options = 
    {
     restitution:0.8,
     friction:1.5,
     density:1

    }
   this.body = Bodies.rectangle(x,y,width,height,options);
   this.Visibility = 255;
   this.width = width;
   this.height = height;
   World.add(world, this.body);
  }

  display()
  {
    if(this.body.speed < 6)
    {
      var pos = this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width,this.height);
    }
    else
    {
     World.remove(world,this.body);
     push();
     this.Visibility = this.Visibility - 3;
     tint(255,this.Visibility);
     rect(this.body,this.body.position.x,this.body.position.y,this.width,this.height);
     pop();
    }
  }
 
 
};