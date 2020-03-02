"use strict";
(function () {
    var element = document.getElementById("horse");

    element.addEventListener("click", function() {
        let image=document.getElementById("horse");
        let avaliableSpaceV=window.innerHeight-image.clientHeight;
        let avaliableSpaceH=window.innerWidth-image.clientWidth;
        image.style.top=Math.round(Math.random()*avaliableSpaceV)+"px";
        image.style.left=Math.round(Math.random()*avaliableSpaceH)+"px";
    });
})();