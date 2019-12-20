// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker{
    constructor(length,width,height){
    this.length=length;
    this.width=width;
    this.height=height;
  }
volume(cuboid){
    return this.length*this.width*this.height;
}
surfaceArea(cuboid){
    return 2*(this.length*this.width + this.length*this.height + this.width*this.height)
}
}
class CubeMaker extends CuboidMaker{
    constructor(length,width, height){
        super(length,width,height);   
    }
    volumeOfCube=function(cube){
        return Math.pow(this.length,3);
    }
    surfaceAreaOfCube=function(cube){
        return 6*(Math.pow(this.length,2));
    }
}
const cuboid=new CuboidMaker(4, 5, 5);
const cube=new CubeMaker(3,3,3);
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cube.volumeOfCube());// 3^3 =27
console.log(cube.surfaceAreaOfCube());//6*3^2=54
// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.