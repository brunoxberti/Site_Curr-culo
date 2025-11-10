console.log("Se está lendo isso é porque o javascrip está funcionando")



//Só roda na Pagina Sobre mim
let textoMim;
const promessa = Promise.resolve( textoMim = document.getElementById("textoMim"));
promessa.then(() =>{

if (textoMim == null){
   return;
}



const textoColocar = "Olá! Sou Bruno Pasqualini Berti! Sou aluno de ciência da computação na Unisinos Porto Alegre Também sou um gamer avido e amante da ciência. Estou sempre disposto a apreender mais e crescer. Estou procurando estagio ou emprego na area de TI, de preferencia na area de backend. Se quiser falar comigo clique em Contato."   ;   
            
const textoColocarArray = textoColocar.split('');


let i = 0;

//Pula toda animação se cliclar no texto
textoMim.addEventListener("click",function(){
  i = 1000000000;
  textoMim.textContent =   textoColocar;
})

setInterval(function() {
    if (i < textoColocar.length){
    textoMim.textContent += textoColocarArray[i];
    i++;
    }
}, 40);

}
)
.catch((erro) => console.log(`Um erro ocorreu - ${erro}`));

const butnDark = document.querySelector("#butn_dark");


var r = document.querySelector(':root');

var darkmode;

if(localStorage.getItem("isDarkMode") == null){
    console.log("Local Storage vazio")
    localStorage.setItem("isDarkMode", true);
    darkmode = true;
}
else{
    darkmode =  (localStorage.getItem("isDarkMode") === 'true');
    if(darkmode == true){
        console.log("Local Storage não vazio, iniciando Dark mode");
        setDarkMode();
    }
    else{
        console.log("Local Storage não vazio, iniciando Light mode");
        setLightMode();
    }
}


butnDark.addEventListener("click", function() {
    if(darkmode == true){
        setLightMode();
        darkmode = false;
    }
    else{
        setDarkMode();
        darkmode = true;
    }
    localStorage.setItem("isDarkMode", darkmode);


});


function setDarkMode(){
    r.style.setProperty('--CorText1', 'white');
    r.style.setProperty('--CorPrim',"#000622");
    r.style.setProperty('--CorSec',"#00356B");
}

function setLightMode(){
    r.style.setProperty('--CorText1', 'black');
    r.style.setProperty('--CorPrim',"beige");
    r.style.setProperty('--CorSec',"#877FFF");
}


console.log(localStorage.getItem("isDarkMode"));
console.log(darkmode);