let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
    count++;
    countEl.textContent = count;
}
function save() {
    let prevEntry = count + " - ";
    saveEl.textContent += prevEntry;
    countEl.textContent = 0;
    count = 0;
    console.log(count);
}