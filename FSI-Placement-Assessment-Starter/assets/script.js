// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Daniel Heinrich" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0; // Gingerbread
let cc = 0; // Chocolate Chip
let sugar = 0; // Sugar Sprinkle

overallTotal = gb + cc + sugar

function updateQuantity(displayQuantity) {
    let totalQuantity = document.querySelector('#qty-gb');
    totalQuantity.textContent = displayQuantity;
    
}

//

function updateQuantity(displayQuantity) {
    let totalQuantity = document.querySelector('#qty-cc');
    totalQuantity.textContent = displayQuantity;
    
}




// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const totalDisp = document.querySelector('#summary')

// Code to update name display
credit.textContent = `Created by ${yourName}`


// // HINT: You can delete this console.log after you no longer need it!
// console.log('Gingerbread + button was clicked!')

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked


gbPlusBtn.addEventListener('click', function () {
    console.log('Gingerbread + button was clicked!');
    gb++;
    overallTotal++;
    console.log(gb)
    console.log(overallTotal)
    updateQuantity(gb)
})

gbMinusBtn.addEventListener('click', function () {
    if (gb > 0) {
    console.log('Gingerbread - button was clicked!');
    gb--;
    overallTotal--;
    console.log(gb)
    console.log(overallTotal)
    updateQuantity(gb);
    }
})

///

ccPlusBtn.addEventListener('click', function () {
    console.log('Chocolate Chip + button was clicked!');
    cc++;
    overallTotal++;
    console.log(cc)
    console.log(overallTotal)
    updateQuantity(cc)
})

ccMinusBtn.addEventListener('click', function () {
    if (cc > 0) {
    console.log('Chocolate Chip - button was clicked!');
    cc--;
    overallTotal--;
    console.log(cc)
    console.log(overallTotal)
    updateQuantity(cc)
    }
})

//







// TODO: Hook up event listeners for the rest of the buttons