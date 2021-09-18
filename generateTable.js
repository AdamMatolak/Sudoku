function generaneNumbers(){
    for(let i = 0;i<81;i++){
        $("#gametable").append("<p>" + (i+1) + "</p>");
    }
}
window.onload = generaneNumbers();