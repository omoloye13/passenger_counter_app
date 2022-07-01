let countEl =document.getElementById("count-el");
let count = 0;
let saveEl = document.getElementById("save-el");

function increment() {
    // count = count + 1
    count += 1
    // console.log(count);
    countEl.textContent = count;
    
}
function save() {
    // console.log(count); 
    let saveCount = count + " - "
    // console.log(saveCount);
    saveEl.textContent += saveCount
    countEl.textContent = 0;
    // count = 0   
}
