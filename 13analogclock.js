setInterval(time,1000);
function time(){
    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();

    var hourpos = hour*360/12 + ((minute *360/60)/12);
    var minutepos = (minute*360/60) + (second*360/60)/60;
    var secondpos = second * (360/60);
    document.getElementById("hour").style.transform = "rotate("+hourpos+"deg)";
    document.getElementById("minute").style.transform = "rotate("+minutepos+"deg)";
    document.getElementById("second").style.transform = "rotate("+secondpos+"deg)";
}