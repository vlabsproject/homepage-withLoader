let messageAmp1 = 0;
let messageFreq = 0;
let carrierAmp1 = 0;
let carrierFreq = 0;
const modulationCondition = document.querySelector("body > div.twoelementssec3");


// ------------------------------------------------------Message Signal Slider ---------------------------------------------


const valueOne = document.querySelector("#value_1")
const messAmpInput = document.querySelector("#mess_amp_input");
valueOne.textContent = messAmpInput.value;
messAmpInput.addEventListener("input", (event) => {
    valueOne.textContent = event.target.value;
  messageAmp1 = event.target.value;
  messageSignal();
  fmModulation();
  modulationValueUpdate();
  
})

const valueTwo = document.querySelector("#value_2")
const messFreqInput = document.querySelector("#mess_freq_input");
valueTwo.textContent = messFreqInput.value;
messFreqInput.addEventListener("input", (event) => {
    valueTwo.textContent = event.target.value;
  messageFreq = event.target.value;
//   messageFreq = messageFreq *0.1;
  messageSignal();
  fmModulation();

});

function messageSignal(){
    const message = document.getElementById('amMessage');
    const ms = message.getContext('2d');
    ms.beginPath();
    ms.clearRect(0,0,message.width,message.height);
    ms.fillStyle = "#000000";
    ms.fillRect(0, 0, message.width, message.height);
    ms.moveTo(0,message.height/2);
    for (let i = 0; i < message.width; i++) {
        ms_Y =  message.height/2 + Math.cos(2 * Math.PI * i * messageFreq * 0.01 ) * messageAmp1 * 10;
      ms.lineTo(i, ms_Y);  
    }
    ms.lineTo(message.width, message.height/2);
    ms.strokeStyle = "yellow";
    ms.stroke();
    }


// ------------------------------------------------------ CarrierSignal Slider -----------------------------------------------------

const valueThree = document.querySelector("#value_3")
const carrAmpInput = document.querySelector("#carr_amp_input");
valueOne.textContent = carrAmpInput.value;
carrAmpInput.addEventListener("input", (event) => {
    valueThree.textContent = event.target.value;
    carrierAmp1 = event.target.value;
    carrierSignal();
    fmModulation();
    modulationValueUpdate();
});

const valueFour = document.querySelector("#value_4")
const carrFreqOutput = document.querySelector("#carr_freq_input");
valueFour.textContent = carrFreqOutput.value;
carrFreqOutput.addEventListener("input", (event) => {
    valueFour.textContent = event.target.value;
    carrierFreq = event.target.value;
    carrierSignal();
    fmModulation();
});






function carrierSignal(){
        const carrier = document.getElementById('amCarrier');
        const cs = carrier.getContext('2d');
        cs.beginPath();
        cs.clearRect(0,0,carrier.width,carrier.height);
        cs.fillStyle = "#000000";
        cs.fillRect(0, 0, carrier.width, carrier.height);
        cs.moveTo(0,carrier.height/2);
        for (let i = 0; i < carrier.width; i++) {
            cs_Y =  carrier.height/2 + Math.cos(2* Math.PI * i * carrierFreq * 0.01 ) * carrierAmp1 * 10 ;
          cs.lineTo(i, cs_Y);  
        }
        cs.lineTo(carrier.width, carrier.height/2);
        cs.strokeStyle = "yellow";
        cs.stroke();
        }


// --------------------------------------------------------------- Frequency Modulation ---------------------------------------------------------

function fmModulation(){
  const modulated = document.getElementById('fmModulated');
  const fs =modulated.getContext('2d');
  fs.beginPath();
  fs.clearRect(0,0,modulated.width,modulated.height);
  fs.fillStyle = "#000000";
  fs.fillRect(0, 0, modulated.width, modulated.height);
  fs.moveTo(0,modulated.height/2);
  for (let i = 0; i <modulated.width; i++) {
      fm_Y = modulated.height/2 + (carrierAmp1 * 10 * Math.cos((2*Math.PI*carrierFreq*i*0.01) - 20*Math.sin(2*Math.PI*messageFreq*i*0.01)));
      fs.lineTo(i,fm_Y);  
  }
  fs.lineTo(modulated.width,modulated.height/2);
  fs.strokeStyle = "yellow";
  fs.stroke();
}
function modulationValueUpdate(){
        if(messageAmp1-carrierAmp1 < 0){
            modulationCondition.innerHTML = "Result:- Under Modulation";
            modulationCondition.style.color = "#EBFF00";
          }
        else if(messageAmp1-carrierAmp1 > 0){
            modulationCondition.innerHTML = "Result:- Over Modulation";
            modulationCondition.style.color = "#E32727";
          }
        else if(messageAmp1-carrierAmp1 == 0){
            modulationCondition.innerHTML = "Result:- Critical Modulation";
            modulationCondition.style.color = "#2BFF09";
          }
    }

messageSignal();
carrierSignal();
fmModulation();