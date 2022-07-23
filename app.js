

function getNumber(num) {
    var result = document.getElementById("result");

    result.value += num;
}

function clearResult() {
    var result = document.getElementById("result");
    result.value = ""
}

function getResult() {
    var result = document.getElementById("result");
    result.value = eval(result.value);
}


//slider javascript

var mainImg = document.getElementById("img");
// var changeImg = document.getElementById("images");
// var allImg = changeImg.getElementsByTagName("IMG");
var i = 0;
var images = []
var time = 3000;

images[0] = 'slider1.jpg';
images[1] = 'slider2.jpg';
images[2] = 'slider3.jpg';
images[3] = 'slider4.jpg';

function changeImg(){
    document.slide.src = images[i];
    if(i < images.length - 1){
        i++;
    }else{
        i = 0;
    }
    setTimeout("changeImg()",time);
}

window.onload = changeImg;