let gllr = document.getElementById("gallery");
let back = document.querySelector(".btn-back")
let next = document.querySelector(".btn-next")

gllr.addEventListener("wheel" , (e)=>{
  e.preventDefault();
  
  gllr.scrollLeft += e.deltaY

})
back.addEventListener("click",()=>{
  gllr.scrollLeft -= 250 ;
  gllr.style.scrollBehavior = "smooth"
})
next.addEventListener("click",()=>{
  gllr.scrollLeft += 250 ;
  gllr.style.scrollBehavior = "smooth"
})