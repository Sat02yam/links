// window.onload = function() {
//     document.getElementById('linkM').transform = "translateX(-10rem)";
// }

function myFun(){
    document.getElementById('linkM').style.transform = "translateX(-10rem)";
    document.getElementById('rightB').style.opacity = "1"
    document.getElementById('one').style.opacity = "0.4"
    document.getElementById('two').style.opacity = "1"
    document.getElementById('left').style.opacity = "1"
    document.getElementById('right').style.opacity = "0"
    document.getElementById('right').style.transform = "translateX(10px)"
    document.getElementById('left').style.transform = "translateX(00px)"
}

function myFunn(){
    document.getElementById('linkM').style.transform = "translateX(10rem)";
    document.getElementById('rightB').style.opacity = "0"
    document.getElementById('one').style.opacity = "1"
    document.getElementById('two').style.opacity = "0.4"
    document.getElementById('left').style.opacity = "0"
    document.getElementById('right').style.opacity = "1"
    document.getElementById('right').style.transform = "translateX(0px)"
    document.getElementById('left').style.transform = "translateX(10px)"
}