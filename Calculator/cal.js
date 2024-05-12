function displayvalue(val)
{
document.getElementById("Display").value = document.getElementById("Display").value + val;
}   
function clean()
{
    document.getElementById("Display").value= "";
}
function calci()
{
   var user= document.getElementById("Display").value;
   var result=eval(user);//eval is used to identify the arthemetic functions
   document.getElementById("Display").value = result;
}
function remove()
{
    document.getElementById("Display").value= document.getElementById("Display").value.slice(0, -1); 
}
