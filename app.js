let qr_code= document.querySelector("#qr-code")
let code_img= document.querySelector("code-img")
let loader= document.querySelector("#loading")
  

qr_code.addEventListener("click",()=>{
loader.style.display="block"

code_img.onload = function () {
    loader.style.display = "none"
}


let input=document.querySelector("#input").ariaValueMax;


let api=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`;
code_img.src= api;


})