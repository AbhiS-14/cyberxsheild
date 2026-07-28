let slides=document.querySelectorAll(".slide")
let cs=0
slides[cs].classList.add("active")
// function pre()
// {
//     slides[cs].classList.remove("active")
//     cs--;
//     if(cs<0)
//     {
//         cs=slides.length-1
//     }
// slides[cs].classList.add("active")
// }
function next()
{
     slides[cs].classList.remove("active")
     cs++;
     if(cs>=slides.length)
     {
        cs=0;
     }
     slides[cs].classList.add("active")

}
setInterval(next,2000)