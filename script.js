const sleep = async (time) => new Promise((resolve) => setTimeout(() => resolve(), time));

const charBox = document.querySelector("#char");
const feedbackBox = document.querySelector("#feedback");
let expectedKey = "";
const keys = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]
const rollNewKey = () => {
    let newKey = expectedKey;
    while(expectedKey ===newKey) {
        newKey = keys[Math.floor(Math.random()*26)];
    }
    expectedKey = newKey;
    charBox.textContent = expectedKey.toUpperCase(); 
}



document.body.addEventListener("keydown", (e) => {
    if(e.key.toLowerCase() === expectedKey) {
        feedbackBox.textContent = "✓";
        rollNewKey();
    } else {
        feedbackBox.textContent = "❌";
    }
});
rollNewKey();