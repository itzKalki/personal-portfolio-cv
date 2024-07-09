let typingeffect=new Typed("#text",{
    strings:["Kalki","Coder","Developer"],
    loop:true,
    typeSpeed:50,
    backSpeed:50,
})
let dayNight=document.querySelector('.daynight');
dayNight.addEventListener("click",()=>{
    document.body.classList.toggle("night");
    if(document.body.classList.contains("night")){
        dayNight.innerHTML="Day Mode"
    }else{
        dayNight.innerHTML="Night Mode"

    }
})
let date=document.querySelector(".datecontent");
date.innerHTML=new Date().getFullYear();