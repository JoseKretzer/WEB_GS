
let imagens=['img/peixe1.jpg','img/Peixe2.jpg'];
let index =0;
let time= 3000;

function slideShow(){
    document.getElementById('imgBanner').src=imagens[index];
    index++;

    if(index == imagens.length){
        index=0;
    }
    setTimeout('slideShow()', time);
}
slideShow();




document.addEventListener("DOMContentLoaded", function(){

    
    let email = document.querySelector(".info-email");
     let msg = document.querySelector(".mensagem");

    
    msg.classList.add("hidden");

    email.addEventListener("keyup", function(event){
        if(event.keyCode === 13) { 
            event.preventDefault(); 
            msg.classList.remove("hidden")
            email.style.display="none"; 
            email.value = "";

alert("Agradecemos o Interesse em nosso projeto")


function trocar(cor){
    document.body.style.background=cor;
}

        }

    })



})