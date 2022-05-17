var input = 4;
repeatBox();

function fncustom() {
  input  = document.getElementById("text1").value;
  repeatBox()
}

function getbox16() {
  input  = 16;
  repeatBox()
  alert("getbox16")
}


function getbox32() {
  input  = 32;
  repeatBox()
}

function getbox64() {
  input  = 64;
  repeatBox()
}

function getbox100() {
  input  = 100;
  repeatBox()
}

let boxNum = input**2;
let boxSize = 960/input;
let sizeNum = boxSize + "px";
let repeatNum = "repeat(" + input + ", 1fr)";



let drawingPad = document.querySelector(".drawingPad");
drawingPad.style.gridTemplateColumns= repeatNum;


function singleBox() {
  
  let box = document.createElement("div")
  box.classList.add("box");
  box.style.backgroundColor = "grey";
  box.style.border = "1px solid black";
 
  let drawingPad = document.querySelector(".drawingPad");
  drawingPad.appendChild(box);
  
}

function repeatBox(){
  let i = 1
  
  while (i <= input**2){
    singleBox()
    i++;
  }
}





  
  
  
  
  



  
  
  
  



