let answerDisplay = document.getElementById("answer");
let answerDisplay2 = document.getElementById("answer2");
answerDisplay.value = 0;
answerDisplay2.value = 0;
let temp = 0;
operator = '';
let inputCount = 0;
let count = 0;
let nullCount = 0;
let mathAnswer;
let numString = null;
let turn = true;
let finalAnswer;
let calcCount = 0;
let finAnsLenStr = null;
let finAnsLen = 0;
let fontSizeNum = 100;

let displayLen = null;
let displayLenFin = null;


function changeFontsize(){
    if(inputCount > 4){
        fontSizeNum -= 10;
        answerDisplay.style.fontSize = fontSizeNum + "px";
    }
}

function changeFontsizeFin(){
    if(displayLenFin > 4){
        fontSizeNum -= 10 * (displayLenFin - 4);
        answerDisplay.style.fontSize = fontSizeNum + "px";
    }
}

function clearDisplay(zero){
    count = 0;
    answerDisplay.value = 0;
    answerDisplay2.value = 0;
    operator = '';
    turn = true;
    document.getElementById("clearBtn").innerHTML = 'AC';
    inputCount = 0;
    decCount = 0;
    fontSizeNum = 100;
    answerDisplay.style.fontSize = fontSizeNum + "px";
}

function sign(){
    if(turn = true){
        mathAnswer = parseFloat(answerDisplay.value, 10);
        mathAnswer *= -1; 
        let hasE = answerDisplay.value;
        if(hasE.includes('e')){
            if(hasE.startsWith('-')){
                answerDisplay.value = hasE.slice(1);
            }
            else{
                answerDisplay.value = '-' + hasE;
            }
        }
        else{
            if(hasE.startsWith('-')){
                answerDisplay.value = hasE.slice(1);
            }
            else{
                answerDisplay.value = '-' + hasE;
            }
        }    
    }
    else{
        mathAnswer2 = parseFloat(answerDisplay2.value, 10);
        mathAnswer2 *= -1;
        let hasE = answerDisplay.value;
        if(hasE.includes('e')){
            if(hasE.startsWith('-')){
                answerDisplay.value = hasE.slice(1);
            }
            else{
                answerDisplay.value = '-' + hasE;
            }
        }
        else{
            if(hasE.startsWith('-')){
                answerDisplay.value = hasE.slice(1);
            }
            else{
                answerDisplay.value = '-' + hasE;
            }
        }
        answerDisplay.value = mathAnswer2;
    }
    
}

function percent(){
    if(turn == true){
        mathAnswer = parseFloat(answerDisplay.value, 10);
        mathAnswer /= 100; 
        answerDisplay.value = mathAnswer;       
    }
    else{
        mathAnswer2 = parseFloat(answerDisplay.value, 10);
        mathAnswer2 /= 100;
        answerDisplay.value = mathAnswer2;
    }
}

let decCount = 0;
function decimal(dec){
    console.log(decCount);
    console.log(turn);
    if(decCount == 0 && turn == true && inputCount < 9){
        answerDisplay.value += dec;
        
        console.log("hi");
        decCount++;
    }
    if(decCount == 0 && turn == false && inputCount < 9){
        answerDisplay.value += dec;
        
        console.log("hi2");
        decCount++;
    }
}

function error(){
    answerDisplay.value = null;
    answerDisplay.value += "Error";
}

function display(finAns){
    console.log("calcCount: " + calcCount);
    console.log(mathAnswer);
    console.log(mathAnswer2);
    console.log(finAns);

    if(finAns >= 1000000000){
        //1.52416 e16 = 15241 578750190520
        //1,000,000,000 = 1e9

        console.log("display >= 1000000000");
        numString = finAns.toString();
        finAnsLenStr = numString.length;
        finAnsLen = parseInt(finAnsLenStr, 10);
        finAnsLen -= 1;
        let w = finAns / 10 ** finAnsLen;
        let y = +w.toFixed(6);
        
    
        answerDisplay.value = null;
        answerDisplay.value += y + "e" + finAnsLen;
        displayLen = answerDisplay.value;
        displayLenFin = displayLen.length;
        changeFontsizeFin();
        let x = finAns.toExponential();
        console.log("w: " + w);
        console.log("x: " + x);
        console.log("y: " + y);


    }
    else if(finAns <= -1000000000){
        console.log("display <= 1000000000");
        numString = finAns.toString();
        finAnsLenStr = numString.length;
        finAnsLen = parseInt(finAnsLenStr, 10);
        finAnsLen -= 2;
        console.log("finAnsLen: " + finAnsLen);
        let w = finAns / 10 ** finAnsLen;
        let y = +w.toFixed(5);
        
    
        answerDisplay.value = null;
        answerDisplay.value += y + "e" + finAnsLen;
        displayLen = answerDisplay.value;
        displayLenFin = displayLen.length;
        changeFontsizeFin();
        let x = finAns.toExponential();
        console.log("w: " + w);
        console.log("x: " + x);
        console.log("y: " + y);

        


    }
    else{
        numString = finAns.toString();
        finAnsLenStr = numString.length;
        finAnsLen = parseInt(finAnsLenStr, 10);
        finAnsLen -= 1;
        console.log(finAnsLen);
        
        v = +finAns.toPrecision(2);
        answerDisplay.value = null;
        answerDisplay.value += v;
        displayLen = answerDisplay.value;
        displayLenFin = displayLen.length;
        changeFontsizeFin();
        
    }
    
    turn = false;
}


function getNum(input){
    
    console.log(turn);

    if(answerDisplay.value == 0 ){
        answerDisplay.value = null;
    }
    if(answerDisplay2.value == 0){
        answerDisplay2.value = null;
    }
    document.getElementById("clearBtn").innerHTML = 'C';
  
        
    if(turn == true && inputCount < 9){
        changeFontsize();
        answerDisplay.value += input;
        console.log("logged 1");
    }    

    if(turn == false && inputCount < 9){

        if(nullCount == 0){
            answerDisplay.value = null;
            fontSizeNum = 100;
            answerDisplay.style.fontSize = fontSizeNum + "px";
            nullCount++;
        }
        
        changeFontsize();
        answerDisplay.value += input;
        console.log("logged 2");
    }
    inputCount++;
    console.log("inputCount: " + inputCount);
    console.log(turn);
    
}

function calc(){
    
    mathAnswer = temp;
    console.log(mathAnswer);
    mathAnswer2 = parseFloat(answerDisplay.value, 10);
    console.log(mathAnswer2);

    switch(operator){
        case '+':
            finalAnswer = mathAnswer + mathAnswer2; 
            display(finalAnswer);
        break;
        case '-':
            finalAnswer = mathAnswer - mathAnswer2;
            display(finalAnswer);
        break;
        case '*':
            finalAnswer = mathAnswer * mathAnswer2;
            display(finalAnswer);
        break;
        case '/':
            if(mathAnswer2 == 0){
                error();
            }
            else{
                finalAnswer = mathAnswer / mathAnswer2;
                display(finalAnswer);
            }
            
        break;
    }

    console.log(finalAnswer);
    answerDisplay2.value = null;
    operator = '';
    calcCount++;
    decCount = 0;
    nullCount = 0;
    inputCount = 0;
    count = 0;
    
}

function sum(){
    decCount = 0;
    console.log("sum" + count);
    if(count > 0){
        
        console.log("calc >  0");
        calc();
    }
    temp = parseFloat(answerDisplay.value, 10);
    turn = false;
    operator += '+';
    count++;
    inputCount = 0;
}

function subt(){
    console.log(count);
    decCount = 0;
    if(count > 0){
        
        console.log("calc >  0");
        calc();
    }
    temp = parseFloat(answerDisplay.value, 10);
    turn = false;
    operator += '-';
    count++;
    inputCount = 0;
}

function mult(){
    console.log(count);
    decCount = 0;
    if(count > 0){
        
        console.log("calc >  0");
        calc();
    }
    temp = parseFloat(answerDisplay.value, 10);
    turn = false;
    operator += '*';
    count++;
    inputCount = 0;
}


function div(){
    console.log(count);
    decCount = 0;
    if(count > 0){
        
        console.log("calc >  0");
        calc();
    }
    temp = parseFloat(answerDisplay.value, 10);
    turn = false;
    operator += '/';
    count++;
    inputCount = 0;
}

