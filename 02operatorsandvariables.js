var x=5+5;
var y="5"+5+1;
var z=5+5+"5";
document.getElementById("id1").innerHTML=x;
document.getElementById("id2").innerHTML=y;
document.getElementById("id3").innerHTML=z;
var m="1";
var n=1;
document.getElementById("id4").innerHTML=(m===n);
var o=2;
var p=2;
document.getElementById("id5").innerHTML=(m==n);
document.getElementById("id6").innerHTML=(o===p);
document.getElementById("id7").innerHTML=(o==p);
function Addition(a1,a2){
    return a1+a2;
}
document.getElementById("id8").innerHTML=Addition(99,3);

