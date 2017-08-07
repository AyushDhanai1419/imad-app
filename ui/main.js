console.log('Loaded!');


//move the image on click

var img = document.getElementById('ayush');
var marginLeft = 0;
function moveRight(){
   
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + "px";
    
}



img.onclick = function(){
    
    var interval = setInterval(moveRight,50);
};