console.log('Loaded!');
alert("Hi I am Java Script");

//change text of the main-text div

var element = document.getElementById('main-text');

element.innerHTML = "New Value";

//move the image on click

var img = document.getElementById('madi');
var marginLeft = 0,c=0;
function moveRight(){
   
    
    
    if(marginLeft > 500 && c===1)
    {
         marginLeft = marginLeft - 5;
         if(marginLeft ===-500)
         {
             c=0;
         }
    }
    else if(marginLeft <= 500 && c===0)
    {
         marginLeft = marginLeft + 5;
         if(marginLeft===500)
         {
             c=1;
         }
    }
    img.style.marginLeft = marginLeft + "px";
}

img.onclick = function(){
    if(marginLeft <=500)
    var Rinterval = setInterval(moveRight,50);
    else
    var Linterval = setInterval(moveLeft,50);

    
};