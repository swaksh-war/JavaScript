class myClass{
    constructor(name,year,cls){
        this.name = name;
        this.year = year;
        this.class = cls;
    }
    present(){
        return this.name+this.year+this.class;
    }
}
myCar = new myClass("ashu",2021,"CSE");
document.getElementById("id1").innerHTML = 
myCar.name+" "+ myCar.year+" "+myCar.class;

class random{
    constructor(val1,val2){
        this.val1=val1;
        this.val2=val2;
    }
    add(){
        return this.val1+this.val2;
    }
}
nums = new random(10,20);
document.getElementById("id2").innerHTML= nums.add();

class count{
    constructor(){
        this.counter = 0;
    }

    incriment(){
        return this.counter=this.counter+1;
    }
    decrement(){
        return this.counter=this.counter-1;
    }
    reset(){
        return this.counter = 0;
    }
}
var num = new count();
document.getElementById("id3").innerHTML=num.counter;

class randclass extends myClass{
    constructor(name,year,cls,sec){
        super(name,year,cls);
        this.sec = sec;
    }
    show(){
        return this.present()+this.sec;
    }
}
let mySec = new randclass("Ashu",2021,"CSE","K20KT");
document.getElementById("id4").innerHTML = mySec.show()