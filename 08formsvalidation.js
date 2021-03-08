function myFunc(){
    var txt="";
    if(document.getElementById("id1").validity.rangeOverflow){
        txt = "number ghata laure boht jyada hai";
    } else if(document.getElementById("id1").validity.rangeUnderflow) {
        txt = "Bada Number Daal Laure";
    } else {
        txt = "chal chal aage chal";
    }
    window.alert(txt);
}