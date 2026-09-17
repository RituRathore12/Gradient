myHexa = ()=>{
let hexvalue = "0123456789abcdef";
let color = "#";

for (let i = 0; i < 6; i++) {
    color = color+ hexvalue[Math.floor(Math.random()*16)] 
}
return color;
}

let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let gra = document.querySelector(".gradient");
let h5 = document.querySelector('h4')
let btn1;
let btn2;
handleBtn1 = () =>{
     btn1 = myHexa();
      b1.innerText = `${btn1}`;
   gra.style.backgroundImage = `linear-gradient( to right top, ${btn1} , #444)`;
   h5.innerText = `linear-gradient(to right top , ${btn1}, #444 )`
};
handleBtn2 = () =>{
     btn2 = myHexa();
     b2.innerText = `${btn2}`;
    gra.style.backgroundImage = `linear-gradient(to left top , ${btn1},${btn2} )`;
    h5.innerText = `linear-gradient(to left top , ${btn1},${btn2} )`
    
}





b1.addEventListener("click",handleBtn1);
b2.addEventListener("click",handleBtn2);



