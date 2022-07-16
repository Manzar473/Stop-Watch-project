const hours=document.getElementById("hours");
const minutes=document.getElementById("minutes");
const seconds=document.getElementById("seconds");
const start=document.getElementById("start")
const stop=document.getElementById("stop")
const lap=document.getElementById("lap")
const reset=document.getElementById("reset")
const clear=document.getElementById("clear")
const btnContainer=document.getElementsByClassName("buttons");
let secondCount=0;
let minuteCount=0;
let hourCount=0;


start.addEventListener("click", function(){
    start.style.display="none";
    stop.style.display="block";
    lap.style.display="block";
    reset.style.display="block";
  let myinterval= setInterval(function(){
    secondCount++;
    if(secondCount<10)
    {
        seconds.textContent=  "0"+secondCount;
    }
    else
    seconds.textContent=secondCount;
    if(secondCount===99)
    {
        
        secondCount=-1; 
        minuteCount++;
        if(minuteCount<10)
        {
            minutes.textContent="0"+minuteCount+" : ";   
        }
        else
        minutes.textContent= minuteCount +" : ";
       
    }
     
   if(minuteCount===60)
   {
    minuteCount=0;
    hourCount++;
    if(hourCount<10)
    hours.textContent="0"+hourCount+" : ";
    else
    hours.textContent=hourCount+" : ";
   }


   },10)
   
   stop.addEventListener("click",()=>{
    clearInterval(myinterval)
    stop.style.display="none";
    start.style.display="block"
   })

   reset.addEventListener("click", ()=>{
    clearInterval(myinterval)
    secondCount=0;
    minuteCount=0;
    hourCount=0;
    hours.textContent="00:";
    minutes.textContent="00:";
    seconds.textContent="00";
    start.style.display="block";
    stop.style.display="none";
    lap.style.display="none";
    reset.style.display="none";

   })
   

})

lap.addEventListener("click",()=>{
clear.style.display="block";
    const newdiv=document.createElement("div")
    newdiv.classList.add("LapDiv")
    newdiv.textContent= hourCount+":"+minuteCount+":"+secondCount;
    document.body.appendChild(newdiv)
    clear.style.backgroundColor="black"
    clear.addEventListener("click",()=>{
        document.body.removeChild(newdiv);
        clear.style.display="none"
    })
   })



  