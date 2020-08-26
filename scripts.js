function addToResults(btn) {
    const curClasses = btn.classList;
    let inputBox = document.querySelector(".input");
    if(curClasses.contains("operator")) {
        inputBox.textContent = `${inputBox.textContent} ${btn.textContent} `;
    } else {
        inputBox.textContent = inputBox.textContent + btn.textContent;
    }    
}   

function getResults() {
    const resultsArr = document.querySelector(".input").split(" ");

    for(var i = 0; i < resultsArr.length; i++) {
         if(parseInt(resultsArr[i]) == NaN) {

         }
    }
}

function operate(operator, num1, num2) {
    const operations = {
        "/": (num1, num2) => num1 / num2,
        "x": (num1, num2) => num1 / num2,
        "-": (num1, num2) => num1 / num2,
        "+": (num1, num2) => num1 / num2
    }

    return operations[operator](num1, num2);
}

function clearOne() {
    const inputBox = document.querySelector(".input");
    inputBox.textContent = inputBox.textContent.slice(0,-1);
    
}

function clearAll() {
    const inputBox = document.querySelector(".input");
    const resultBox = document.querySelector(".result");
    inputBox.textContent = "";
    resultBox.textContent = "";
}