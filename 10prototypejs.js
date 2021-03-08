function Person(name,age,eyecolor){
    this.name=name;
    this.age=age;
    this.eyecolor=eyecolor;
    this.nation="india"
}

Person.prototype.title=function(){
    return this.name+" "+this.age+" "+this.eyecolor+" "+this.nation;
}
var name1 = new Person("ashu",19,"blue")
document.getElementById("id1").innerHTML= name1.title();