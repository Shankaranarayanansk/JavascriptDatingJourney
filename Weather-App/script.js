const weather = document.querySelector('.form');
const city = document.querySelector('.cityname')
const card = document.querySelector('.card');
const apikey ="78df9863f0514b8be0e579a6ce439e07";
form.addEventListener("submit",event => {
    event.preventDefault();
    const city = city.value;
    if(city)
        {

        }
        else  
        {
        errormsg('Please enter city ')
        }
    
}
) 
async function getreport(city)
{

}
function displayinfo(data)
{

}
function emojis(id)
{

}
function error(message)
{
 const errormsg = document.createElement('p')
 errormsg.textContent = message;
 errormsg.classList.add('error');
 card.textContent ="";
 card.style.display = "flex";
 card.appendChild(errormsg);

}