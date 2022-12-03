const redDot= document.querySelectorAll(".redDot");
const mark=document.getElementById("mark");
const no = document.getElementById("no");




mark.addEventListener('click',()=>{
   no.style.setProperty("--content", '1');
   redDot.forEach(dot => {
    dot.style.setProperty("--display", 'none');
 });
 
})
   


