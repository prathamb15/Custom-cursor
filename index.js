var main = document.querySelector("#main");
var curosr = document.querySelector(".cursor");


main.addEventListener("mousemove",function(dets){
    curosr.style.left=dets.x+'px'    
    curosr.style.top=dets.y+'px'   
})