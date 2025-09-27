let no = document.getElementById("no");
no.addEventListener("mouseover",()=>{
  no.style.position = "absolute";
  no.style.top = Math.floor(Math.random()*40) + "vh";
  no.style.right = Math.floor(Math.random()*40) + "vw";
})



