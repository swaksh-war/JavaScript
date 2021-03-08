var names = new Array("Ashu","Anky","Capti","Dingo","Chandler");
document.getElementById("arr").innerHTML = names;

function addFunc(a,b){
    return a+b;
}

var myArray = [
    addFunc,
    Date.now(),
]
window.alert(myArray[0](10,20));

var fruits,flen,text;
fruits = [
    "Banana",
    "Apple",
    "Kiwi",
    "Rosogolla"
]
flen = fruits.length;

text+="<ul>";
for (i=0;i<flen;i++){
    text+="<li>"+fruits[i]+ "</li>";
}
text+= "</ul>";
document.getElementById("list").innerHTML= text;