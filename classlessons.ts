//Group Variables (Properties) and functions (methods) that are highly related.

class Point{
    x:number;
    y:number;

    //add question mark to make the parameters optional
    constructor(x?:number,y?:number){
        this.x=x;
        this.y=y;
    }
    draw() {
        console.log('X:'+ this.x + ',Y:'+ this.y);
    }
}

let point=new Point();
point.draw();
