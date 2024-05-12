var final=document.querySelector(".clock");

function run()
{
    var time=new Date();
    var hours= time.getHours();
    var min= time.getMinutes();
    var sec=time.getSeconds();
    var txt="Am";
    if(hours>12)
    {
        hours=hours-12;
        txt="PM";
     }
     else if(hours===0)
     {
        hours=12;
        txt="AM";
     }
     hours=hours<10?'0'+hours:hours;
     min=min<10?'0'+min:min;
     sec=sec<10?'0'+sec:sec;
final.innerHTML=`${hours} : ${min} : ${sec}  ${txt}`;
}
run()
setInterval(run,1000)