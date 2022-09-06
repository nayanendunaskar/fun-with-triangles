const inputs = document.querySelectorAll(".angle-input");
const triangleBtn = document.querySelector("#triangle-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
const sumOfAngles = angle1 + angle2 + angle3;
return sumOfAngles;
}

function isItTriaangle() {

}

triangleBtn.addEventListener("click", isItTriaangle);
