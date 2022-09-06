const inputs = document.querySelectorAll(".angle-input");
const triangleBtn = document.querySelector("#triangle-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isItTriaangle() {
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));

    if(sumOfAngles === 180){
        outputEl.innerText = "Hurray!! The angles form a Triangle";
    }
    else{
        outputEl.innerText = "Oops!! The angles doesn't form a Triangle";
    }
}

triangleBtn.addEventListener("click", isItTriaangle);