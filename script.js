var as=document.querySelector('h5')
var add=document.querySelector('#add')
var coount=0


add.addEventListener("click",function(){
   if(coount==0){
    as.innerHTML="Friends"
    as.style.color="green"
    add.innerHTML="Following"
    add.style.backgroundColor="black"
   
    coount=1
   }
   else{
    as.innerHTML="Stranger"
    as.style.color="red"
    add.innerHTML="Follow"
    add.style.backgroundColor="royalblue"
    
    coount=0
   }

})
