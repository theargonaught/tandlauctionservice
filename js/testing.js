// JavaScript Document


function findage(){
   var name = prompt("Enter your name")
   var date = new Date()
  var bday = prompt("Enter your birth year")
  var now = date.getFullYear()
  var age = (now-bday)
  var month = (date.getMonth() + 1)

  //document.write("<p>"+month)

 // document.write("Hi " + name +"! ")
  //  if (name = "Nate")
  // {var age = (age -1)}


  if (month < 6)
  {document.getElementById('age').innerHTML=("You are " + (age - 1) + " years old!")}
else
 { document.getElementById('age').innerHTML=("You are " + age + " years old!")}

}

function clearage()
{ document.getElementById('age').innerHTML=("")}

  function changeMe()
  {setTimeout(function(){document.getElementById("name").style.fontSize="100px";},1000);} //Last bit is the delay
  function normal()
  {document.getElementById("name").style.fontSize="15px";}
  function changeName()
  {var name = prompt("Enter Your Name")
  document.getElementById("name").innerHTML=("Hello "+ name +"!")}




 
 /*
 function myfunction()
    {
    var name = confirm("Are you Nate?")
    if (name == "true")
    {var x = "Nate"}
    else
    {var x = "Mandy"}
    document.write("Hi "+x+"!");
*/



