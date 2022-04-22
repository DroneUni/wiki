import Toastify from '/assets/toastify.mjs';
import { Vehicle , Position } from "./converter.mjs";

window.addEventListener("load",()=>{
    const btn = document.getElementById("btn");
    const keyInput = document.getElementById("main-textarea");
    const xInput = document.getElementById("x");
    const yInput = document.getElementById("y");
    const rInput = document.getElementById("r");
    const rotationIndicator = document.getElementById("rotation-indicator");

    btn.addEventListener("click",()=>{
        const inputKey = keyInput.value;
        const veh = new Vehicle(inputKey);
        veh.position = new Position(-xInput.value, -yInput.value, rInput.value);
        const outputKey = veh.toString();
        navigator.clipboard.writeText(outputKey).then(()=>{
            Toastify({
                text: "Result copied to clipboard",
                duration: 2500,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    backgroundColor: "#161b22",
                    outline: "none",
                    borderColor: "#121212",
                    boxShadow: "0 0 10px #4e9f3d"
                },
                onClick: function(){} // Callback after click
              }).showToast();
        });
    });
    rInput.addEventListener("input", () => {
        rotationIndicator.style.transform = `rotate(${this.value}deg)`;
    });
    
    
});