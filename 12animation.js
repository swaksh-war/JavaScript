function replace(hide,show){
    document.getElementById(hide).style.display = "none";
    document.getElementById(show).style.display = "block";
}

function trans(){
    
    document.getElementById('div4').style.height= "200px";
    document.getElementById('div4').style.width= "200px";
    document.getElementById("form1").style.visibility="visible";
    document.getElementById('txt').innerHTML= "";
}

setInterval(time,1000);
function time(){
    var d = new Date();
    document.getElementById("id5").innerHTML = 
    d.getHours() +":"+
    d.getMinutes()+":"+
    d.getSeconds()
}
