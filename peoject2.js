var doc=document.querySelector("#container")
var icon=document.querySelector("i")

doc.addEventListener("dblclick",function(){
    setTimeout(function(){
         icon.style.transform="translate(-50%,-50%) scale(1)"
          icon.style.color="red"
          icon.style.opacity=0.8
    },700)
    setTimeout(function(){
        icon.style.opacity=0
         icon.style.color="red"
   },1700)
    setTimeout(function(){
        icon.style.transform="translate(-50%,-50%) scale(0)"
         icon.style.color="red"
   },2000)
   
    
    
})