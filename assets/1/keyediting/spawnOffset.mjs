import Toastify from '/assets/toastify.mjs';
import { Vehicle , Position } from "./converter.mjs";
import { showError } from "/assets/showError.mjs";

console.log("1");

const pasteBtn = document.getElementById("btn1");
const genBtn = document.getElementById("btn2");
const keyInput = document.getElementById("input-textarea");
const keyOutput = document.getElementById("output-textarea");
const xInput = document.getElementById("x");
const yInput = document.getElementById("y");
const rInput = document.getElementById("r");
const rotationIndicator = document.getElementById("rotation-indicator");

pasteBtn.addEventListener("click",()=>{
    navigator.clipboard.readText().then(str=>{
        keyInput.textContent = str;
        Toastify({
            text: "Key pasted to input",
            duration: 1250,
            close: false,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "#2e2e38",
                outline: "none",
                borderColor: "#121212",
                boxShadow: "0 0 10px #4e9f3d"
            },
            onClick: function(){} // Callback after click
        }).showToast();
    }).catch(showError);
});
genBtn.addEventListener("click",()=>{
    const inputKey = keyInput.value;
    const veh = new Vehicle(inputKey);
    veh.position = new Position(-xInput.value, -yInput.value, rInput.value);
    const outputKey = veh.toString();
    keyOutput.textContent = outputKey;
    navigator.clipboard.writeText(outputKey).then(()=>{
        Toastify({
            text: "Result copied to clipboard",
            duration: 2500,
            close: false,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "#2e2e38",
                outline: "none",
                borderColor: "#121212",
                boxShadow: "0 0 10px #4e9f3d"
            },
            onClick: function(){} // Callback after click
            }).showToast();
    }).catch(showError);
});
rInput.addEventListener("input", (e) => {
    rotationIndicator.style.transform = `rotate(${e.target.value}deg)`;
});

console.log("2");