var obj = {counter :0};
Object.defineProperty(obj,"reset",{
    get: function() {return this.counter = 0;}
});
Object.defineProperty(obj,"incriment",{
    get: function() {return this.counter++;}
});
Object.defineProperty(obj,"decrement",{
    get: function() {return this.counter--;}
});
document.getElementById("id1").innerHTML=obj.counter;