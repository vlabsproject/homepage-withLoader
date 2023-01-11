/////Power Switch////
var flag=0;
var on=0;
var runDone=0;
let amp_value = 0;
let freq_value = 0;
function onOff(){
   if(flag == 0)
   {
      document.getElementById("leds").src = "images/greenLed.png";
      flag=1;
      on=1;
   }
   else{
      document.getElementById("leds").src = "images/redLed.png";
      // initial();
      flag=0;
      on=0;
   }
}




// ------------------------------------------------------UserInput--------------------------------------------------------------------
let bitStream = [0,0,0,0,0,0,0,0];


// **************************************************Play Audio Function************************************************************** 
function playSound () {
  var audio = new Audio("images/switchOn.mp3");
  if(flag === 1){
    audio.play();
  }
}



function swapOneZero0(){
   if (flag === 1 ) {
    // playSound();
    
    
    let myImage = document.getElementById('s0');  
    let mySrc = myImage.getAttribute('src'); 
    let myImage_0 = document.getElementById('ss0');
    
    if(mySrc === 'images/toggle_off.png') {
      // playSound();
      myImage.setAttribute('src','images/toggle_on.png');
      myImage_0.setAttribute('src','images/one.jpeg');
      bitStream[0] = 1;
    } else {
      // playSound();
      myImage.setAttribute('src','images/toggle_off.png');
      myImage_0.setAttribute('src','images/zero.jpeg');
      

      
      bitStream[0] = 0;  
      
}
}

else {
  alert("Please turn on the Generator!");
}
}


function swapOneZero1(){

  if (flag == 1 ) {
    // playSound();
   
  
    let myImage = document.getElementById('s1');
    let mySrc = myImage.getAttribute('src');
    let myImage_0 = document.getElementById('ss1');

    if(mySrc === 'images/toggle_off.png') {
    // playSound();
      myImage.setAttribute('src','images/toggle_on.png');
      myImage_0.setAttribute('src','images/one.jpeg');
      bitStream[1] = 1;
    } else {
    //  playSound();
      myImage.setAttribute('src','images/toggle_off.png');
      myImage_0.setAttribute('src','images/zero.jpeg');
      bitStream[1] = 0;  
    }
  }
  
  else{
    alert("Please turn on the Generator!");
  }
}



function swapOneZero2(){ 
   if (flag == 1) {
    // playSound();
   
    let myImage = document.getElementById('s2');
    let mySrc = myImage.getAttribute('src');
    let myImage_0 = document.getElementById('ss2');
    if(mySrc === 'images/toggle_off.png') {
    //  playSound();
      myImage.setAttribute('src','images/toggle_on.png');
      myImage_0.setAttribute('src','images/one.jpeg');
      bitStream[2] = 1;
    } else {
    //  playSound();
      myImage.setAttribute('src','images/toggle_off.png');
      myImage_0.setAttribute('src','images/zero.jpeg');
      bitStream[2] = 0;
    }
  }
    
  else{
    alert("Please turn on the Generator!");
  }
}


function swapOneZero3(){
  if (flag == 1) {
    // playSound();
  
    let myImage = document.getElementById('s3');
    let mySrc = myImage.getAttribute('src');
    let myImage_0 = document.getElementById('ss3');
    if(mySrc === 'images/toggle_off.png') {
    //  playSound();
      myImage.setAttribute('src','images/toggle_on.png');
      myImage_0.setAttribute('src','images/one.jpeg');
      bitStream[3] = 1;
    } else {
      // playSound();
      myImage.setAttribute('src','images/toggle_off.png');
      myImage_0.setAttribute('src','images/zero.jpeg');
      bitStream[3] = 0;
    }
  }
  else{
    alert("Please turn on the Generator!");
  }
}



function swapOneZero4(){

  if (flag == 1) {
    // playSound();
  
    let myImage = document.getElementById('s4');
    let mySrc = myImage.getAttribute('src');
    let myImage_0 = document.getElementById('ss4');
    if(mySrc === 'images/toggle_off.png') {
      // playSound();
      myImage.setAttribute('src','images/toggle_on.png');
      myImage_0.setAttribute('src','images/one.jpeg');
      bitStream[4] = 1;
    } else {
      // playSound();
      myImage.setAttribute('src','images/toggle_off.png');
      myImage_0.setAttribute('src','images/zero.jpeg');
      bitStream[4] = 0;
  }
}
else{
  alert("Please turn on the Generator!");
}

}




function swapOneZero5(){

  if (flag == 1 ) {
    // playSound();
    
    let myImage = document.getElementById('s5');
    let mySrc = myImage.getAttribute('src');
    let myImage_0 = document.getElementById('ss5');
    if(mySrc === 'images/toggle_off.png') {
      // playSound();
      myImage.setAttribute('src','images/toggle_on.png');
      myImage_0.setAttribute('src','images/one.jpeg');
      bitStream[5] = 1;
    } else {
      // playSound();
      myImage.setAttribute('src','images/toggle_off.png');
      myImage_0.setAttribute('src','images/zero.jpeg');
      bitStream[5] = 0;
        }
  }

  else {
    alert("Please turn on the Generator!");
  }
}



function swapOneZero6(){
  if ( flag == 1) {
    // playSound();
    
  
    let myImage = document.getElementById('s6');
    let mySrc = myImage.getAttribute('src');
    let myImage_0 = document.getElementById('ss6');

    if(mySrc === 'images/toggle_off.png') {
      // playSound();
      myImage.setAttribute('src','images/toggle_on.png');
      myImage_0.setAttribute('src','images/one.jpeg');
      bitStream[6] = 1;
    } else {
      // playSound();
      myImage.setAttribute('src','images/toggle_off.png');
      myImage_0.setAttribute('src','images/zero.jpeg');
      bitStream[6] = 0; 
      }
  }
  else {
    alert("Please turn on the Generator!");
  }
}



function swapOneZero7(){ 
  if (flag == 1) {
    // playSound();
  
    let myImage = document.getElementById('s7');
    let mySrc = myImage.getAttribute('src');
    let myImage_0 = document.getElementById('ss7');
    if(mySrc === 'images/toggle_off.png') {
      // playSound();
      myImage.setAttribute('src','images/toggle_on.png');
      myImage_0.setAttribute('src','images/one.jpeg');
      bitStream[7] = 1;
    } else {
      // playSound();
      myImage.setAttribute('src','images/toggle_off.png');
      myImage_0.setAttribute('src','images/zero.jpeg');
      bitStream[7] = 0;
    }
  }
  else{
    alert("Please turn on the Generator!");
  }
}

// SLider Value Vary
const value1 = document.querySelector("#value1")
const amp_input = document.querySelector("#amp_input")
value1.textContent = amp_input.value
amp_input.addEventListener("input", (event) => {
  value1.textContent = event.target.value;
  amp_value = event.target.value; 
  console.log(event.target.value)
});

const value2 = document.querySelector("#value2")
const freq_input = document.querySelector("#freq_input")
value2.textContent = freq_input.value
freq_input.addEventListener("input", (event) => {
  value2.textContent = event.target.value;
  freq_value = event.target.value;
  console.log(event.target.value)
});



// ---------------------------------------------Data Input Code------------------------------------------------------------------
function inputStream(){
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
c.clearRect(0, 0, canvas.width, canvas.height);      //Clears the canvas for new graph
c.fillStyle = "#000000";
c.fillRect(0, 0, canvas.width, canvas.height); 
// canvas.width = innerWidth;
// canvas.height = innerHeight;
var h = canvas.height;
var w = canvas.width;
c.beginPath();
title: "Input signal";
// var dps = [1, 1, 0 ,0, 0, 1, 0, 1];

c.moveTo(0,h/2);

for( let i=0; i<8; i++)
{
    if(bitStream[i] == 0)
    {   
        c.lineTo((i*canvas.width)/8,(canvas.height/2)+(canvas.height/4));
        c.lineTo(((i+1)*canvas.width)/8,(canvas.height/2)+(canvas.height/4));
    }
    else 
    {
        c.lineTo((i*canvas.width)/8,(canvas.height/2)-(canvas.height/4));
        c.lineTo(((i+1)*canvas.width)/8,(canvas.height/2)-(canvas.height/4));
    }
}
c.strokeStyle = "yellow";
c.stroke();
}

// ----------------------------------------------------------Slider Value ----------------------------------------------------------

// function ampSlide(value) {
//   var amp=document.getElementById('ampValue').innerHTML = value;
//   // var y=document.getElementById('freqValue').innerHTML=value;
//   // console.log(amp);
// }

// function freqSlide(value) {
//   var freq=document.getElementById('freqValue').innerHTML = value;
//   // console.log(freq);
// }
// var a=document.getElementById('ampValue').innerHTML;
// console.log(a);

// ----------------------------------------------------------Sine Wave ----------------------------------------------------------
function sineWave(){
const carrier = document.getElementById('canvasCarrier');
const d = carrier.getContext('2d');
d.clearRect(0, 0, carrier.width, carrier.height);    
d.fillStyle = "#000000";
d.fillRect(0, 0, carrier.width, carrier.height);
// carrier.width = innerWidth;
// carrier.height = innerHeight;
d.beginPath();
d.moveTo(0,carrier.height/2);
for (let i = 0; i < carrier.width; i++) {
  d.lineTo(i, carrier.height/2 + Math.sin(i * freq_value*0.03) * amp_value * 10);  
}
d.lineTo(carrier.width, carrier.height/2);
d.strokeStyle = "yellow";
d.stroke();

}
// -------------------------------------------------------FSKOUTPUT---------------------------------------------------------------
function askOutput(){
    const output = document.getElementById('canvasASK');
    const e = output.getContext('2d');
    e.clearRect(0, 0, output.width, output.height); 
    e.fillStyle = "#000000";
    e.fillRect(0, 0, output.width, output.height);
    e.beginPath();
    e.moveTo(0,output.height/2);
    for( let j=0; j<8; j++){
    if(bitStream[j]==0)
    {
        for (let i = j*output.width/8; i < ((j+1)*output.width)/8; i++)
            {
            e.lineTo(i, output.height/2 + Math.sin(i * 0) * amp_value * 10);  
            }
          // e.lineTo(output.width, output.height/2);
    }
    else
    {
        for (let i =j*output.width/8; i < ((j+1)*output.width)/8; i++) 
        {
        e.lineTo(i, output.height/2 + Math.sin(i * freq_value*0.1) * amp_value * 10);  
        }
      // e.lineTo(output.width, output.height/2);
    }
    }
    e.strokeStyle = "yellow";
    e.stroke();
  }
  // -------------------------------------------------FSK SIGNAL---------------------------------------------------------------------
function ffskOutput(){
    const fskSignal = document.getElementById('canvasFSK');
    const f = fskSignal.getContext('2d');
    f.clearRect(0, 0, fskSignal.width, fskSignal.height); 
    f.fillStyle = "#000000";
    f.fillRect(0, 0, fskSignal.width, fskSignal.height);
    f.beginPath();
    f.moveTo(0,fskSignal.height/2);
    for( let j=0; j<8; j++){
    if(bitStream[j]==0)
    {
        for (let i = j*fskSignal.width/8; i < ((j+1)*fskSignal.width)/8; i++)
            {
            f.lineTo(i, fskSignal.height/2 + Math.sin(i * (freq_value*0.01 - 0.02)) * amp_value * 10);  
            }
          // e.lineTo(output.width, output.height/2);
    }
    else
    {
        for (let i =j*fskSignal.width/8; i < ((j+1)*fskSignal.width)/8; i++) 
        {
        f.lineTo(i, fskSignal.height/2 + Math.sin(i * freq_value*0.01) * amp_value * 10);  
        }
      // e.lineTo(output.width, output.height/2);
    }
    }
    f.strokeStyle = "yellow";
    f.stroke();
}
// --------------------------------------------------DEMODULATED SIGNAL---------------------------------------------------------------
function demodulated(){
  const demodu = document.getElementById('canvasDemodulated');
  const g = demodu.getContext('2d');
  g.clearRect(0, 0, demodu.width, demodu.height);                     //Clears the canvas for new graph
  g.fillStyle = "#000000";
  g.fillRect(0, 0, demodu.width, demodu.height);
  // canvas.width = innerWidth;
  // canvas.height = innerHeight;
  // var h = canvas.height;
  // var w = canvas.width;
  g.beginPath();
  // title: "Input signal";
  // var dps = [1, 1, 0 ,0, 0, 1, 0, 1];
  g.moveTo(0,demodu.height/2);
  
  for( let i=0; i<8; i++)
  {
      if(bitStream[i] == 0)
      {   
          g.lineTo((i*demodu.width)/8,(demodu.height/2)+(demodu.height/4));
          g.lineTo(((i+1)*demodu.width)/8,(demodu.height/2)+(demodu.height/4));
      }
      else 
      {
          g.lineTo((i*demodu.width)/8,(demodu.height/2)-(demodu.height/4));
          g.lineTo(((i+1)*demodu.width)/8,(demodu.height/2)-(demodu.height/4));
      }
  }
  g.strokeStyle = "yellow";
  g.stroke();  
}
//OnClick Button

function printArray(){
console.log(bitStream);
inputStream();
// ffskOutput();
askOutput();
sineWave();
demodulated();
}


