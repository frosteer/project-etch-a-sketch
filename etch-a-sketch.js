var input = 16;
repeatBox();
let eraser = false;
let rainbow = false

let boxNum = input**2;
var boxSize = 960/input;
var sizeNum = boxSize + "px";
var repeatNum = "repeat(" + input + ", 1fr)";

let drawingPad = document.querySelector(".drawingPad");
drawingPad.style.gridTemplateColumns= repeatNum;

function penMode() {
  eraser = false
}

function eraserMode() {
  eraser = true;
  console.log("eraser on");
};

function rainbowMode() {
  eraser = false
  rainbow = true
}



function changeColor(event) {
  
  if (eraser == false) {
    event.target.style.backgroundColor = "#181818"
  }

  if (eraser == true) {
    rainbow = false
    event.target.style.backgroundColor = "ghostwhite"
  }
  
  if (rainbow == true) {
     const randomColor = Math.floor(Math.random()*16777215).toString(16);
     event.target.style.backgroundColor = "#" + randomColor;
  }
};

  function mouseUp() {
}

function singleBox() {
  
  let box = document.createElement("div")
  box.classList.add("box");
  box.style.backgroundColor = "ghostwhite";
  box.style.border = "0.001px solid #E8E8E8";
  
  
  box.addEventListener("click", changeColor);
  box.addEventListener("mousedown", changeColor);
  box.addEventListener("mouseover", changeColor);
  box.removeEventListener("mouseup", changeColor);
 
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

function myFunction() {
  alert("Hello World");
}

function fncustom() {
  let drawingPad = document.querySelector(".drawingPad");
  drawingPad.replaceChildren("");
  input  = document.getElementById("text1").value;
    if (input > 100){ 
      alert("Please enter a number lesser than 100");
      getbox16();
      
      } else {
    if (input <= 100){
      var repeatNum = "repeat(" + input + ", 1fr)";
      drawingPad.style.gridTemplateColumns= repeatNum;
      repeatBox()
    }
}}

function getbox16() {
  let drawingPad = document.querySelector(".drawingPad");
  drawingPad.replaceChildren("");
  input  = 16;
  var repeatNum = "repeat(" + input + ", 1fr)";
  drawingPad.style.gridTemplateColumns= repeatNum;
  repeatBox()
}


function getbox32() {
  let drawingPad = document.querySelector(".drawingPad");
  drawingPad.replaceChildren("");
  input  = 32;
  var repeatNum = "repeat(" + input + ", 1fr)";
  drawingPad.style.gridTemplateColumns= repeatNum;
  repeatBox()
}

function getbox64() {
  let drawingPad = document.querySelector(".drawingPad");
  drawingPad.replaceChildren("");
  input  = 64;
  var repeatNum = "repeat(" + input + ", 1fr)";
  drawingPad.style.gridTemplateColumns= repeatNum;
  repeatBox()
}

function getbox100() {
  let drawingPad = document.querySelector(".drawingPad");
  drawingPad.replaceChildren("");
  input  = 100;
  var repeatNum = "repeat(" + input + ", 1fr)";
  drawingPad.style.gridTemplateColumns= repeatNum;
  repeatBox()
}

let targetBox = document.querySelector(".drawingPad div");






  
  
  



  
  
  
  



