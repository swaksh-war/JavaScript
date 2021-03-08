var d = new Date();
function datefunc(){
    document.getElementById("showdate").innerHTML = d;
}

document.getElementById("date1").innerHTML = d.getFullYear();
document.getElementById("date2").innerHTML = d.getTime();