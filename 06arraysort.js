var array = ["Ashu","Anky","Silver","Dingo"];
var array1 = ["Csgo","R6","Pubg"];
array.push("Chandler");
document.getElementById("demo").innerHTML = array;
var x = array.concat(array1);
document.getElementById("demo1").innerHTML = x;

let nums = [10,21,23,54,4,100];
document.getElementById("maxmin").innerHTML = nums;

function myfunction(){
    nums.sort(function(a,b){return a-b});
    document.getElementById("maxmin").innerHTML = nums;
}

function mymin(arr){
    return Math.max.apply(null,arr);
}
document.getElementById("maxnum").innerHTML = mymin(nums);
