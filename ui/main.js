console.log('Loaded!');

var button = document.getElementById('counter');


button.onclick = function()
{
    
  //create a request to counter end point.
  var request = new XMLHttpRequest();
  
  //Capture the response and store it in a variable.
  
  request.onreadystatechange = function()
  {
      if(request.readyState === XMLHttpRequest.DONE)
      {
          //take some action
          if(request.status === 200)
          {
              var counter = request.responseText;
              
              //render the variable in the correct span.
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
      }
  };
  
  //Make a request
  
  request.open('GET','http://ayushdhanai1419.imad.hasura-app.io/ui/counter',true);
  request.send(null);
  
};
//Submit name


var submit = document.getElementById('submit_btn');
submit.onclick = function()
{
      
  //create a request to counter end point.
  var request = new XMLHttpRequest();
  
  //Capture the response and store it in a variable.
  
  request.onreadystatechange = function()
  {
      if(request.readyState === XMLHttpRequest.DONE)
      {
          //take some action
          if(request.status === 200)
          {
             var names = request.responseText;
             names = JSON.parse(names);
    var list = '';
    for(var i = 0; i<names.length; i++)
    {
        list += '<li>' + names[i] +'</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
    
     
          }
      }
      
      
   
  };
  var nameInput = document.getElementById('name');
var name = nameInput.value;
   //Make a request
  request.open('GET','http://ayushdhanai1419.imad.hasura-app.io/submit-name?name='+name,true);
  request.send(null);
    
};