console.log('Loaded!');
alert("Hi I am Java Script");

//change text of the main-text div

var element = document.getElementById('main-text');

element.innerHTML = "New Value";

//move the image on click

var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + "px";
}

img.onClick = function(){
    var interval = setInterval(moveRight,100);
};