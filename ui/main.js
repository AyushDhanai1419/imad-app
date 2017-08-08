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
              varcounter = request.responseText;
              
              //render the variable in the correct span.
              
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
      }
  };
  
  //Make a request
  
  request.open('GET','http://ayushdhanai1419.imad.hasura-app.io/ui/counter',true);
  request.sent(null);
  
};
