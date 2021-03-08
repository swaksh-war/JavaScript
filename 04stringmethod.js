var str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function length(a1){
    return a1.length;
}

var str1 = "please locate where is \'locate\' occurs!";

function loc(a2){
    return a2.indexOf('locate');
}
document.getElementById("one").innerHTML=loc(str1);

function lastloc(a2){
    return a2.lastIndexOf("locate");
}
document.getElementById("two").innerHTML=lastloc(str1);

function ss(a1,num1){
    return a1.substr(num1);
}
window.alert(ss(str,6));

function rep(var1,var2,var3){
    return var1.replace(var2,var3);
}
document.getElementById("three").innerHTML=rep(str1,'locate','located');

function createArray(a1){
    var arr=a1.split("");
    var text="";
    console.log(arr);
    var j=a1.length;
    for(var i=0;i<j;i++){
        text+=arr[i]+"<br>";
    } 
    console.log(text);
    return text;
}
document.getElementById("arr").innerHTML=createArray(str1);

document.getElementById("ifnan").innerHTML=isNaN(100);