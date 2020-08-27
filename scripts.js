function addToInput(btn) {
    const curBtnClass = btn.classList[0];
    if (curBtnClass === "numpad" && curClass === "equals") {
        alert("Please click an operator");
    } else if (curClass === undefined && curBtnClass === "operator") {
        alert("Please click a number")
    } else {
        [lastClass, curClass] = [curClass, curBtnClass]; 
        const inputBox = document.querySelector(".input");
        const resultBox = document.querySelector(".result");

        if((lastClass === "operator" && curClass === "operator") || 
        (lastClass === undefined && curClass === "numpad")) {
            inputBox.textContent = btn.textContent;
        } else if ((lastClass === "numpad" && curClass === "operator") ||
                (lastClass === "operator" && curClass === "numpad") ||
                (lastClass === "equals" && curClass === "operator")) {
            resultBox.textContent = resultBox.textContent + " " + inputBox.textContent;
            inputBox.textContent = btn.textContent;
        } else if (lastClass === "numpad" && curClass === "numpad") {
            inputBox.textContent = inputBox.textContent + btn.textContent;
        } 

        resultArr = document.querySelector(".result")
                            .textContent.split(" ")
                            .filter(x => x !== "");

        if(resultArr.length === 3) {
            getResults(false);
        }
    }
}   

function getResults(fromButton = true) {    
    const resultsBox = document.querySelector(".result");
    const inputBox = document.querySelector(".input");
    if (curClass === "numpad") resultsBox.textContent = resultsBox.textContent + " " + inputBox.textContent;
    
    const resultsArr = resultsBox.textContent.split(" ")
                        .filter(x => x !== "");
    [num1, operation, num2] = [...resultsArr];
    const result = operations[operation](parseFloat(num1), parseFloat(num2));
    resultsBox.textContent = result;
    if(fromButton) {
        inputBox.textContent = "";
        curClass = "equals";
    } else { lastClass = "equals" }
}

function clearLast() {
    const inputBox = document.querySelector(".input");
    inputBox.textContent = inputBox.textContent.slice(0,-1);
    
}

function clearAll() {
    [lastClass, curClass] = [undefined, undefined];
    document.querySelector(".input").textContent = "";
    document.querySelector(".result").textContent = "";
    
}

const operations = {
    "/": (num1, num2) => num2 === 0 ? alert("Cannot divide by 0") : num1 / num2,
    "x": (num1, num2) => num1 * num2,
    "-": (num1, num2) => num1 - num2,
    "+": (num1, num2) => num1 + num2
};

let lastClass, curClass;
