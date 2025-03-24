let answerDisplay = document.getElementById("answer");
let answerDisplay2 = document.getElementById("answer2");
answerDisplay.value = 0;
answerDisplay2.value = 0;
let temp = 0;
operator = '';
let inputCount = 1;
let count = 0;

let mathAnswer;

let turn = true;
let finalAnswer;
let calcCount = 0;

function clearDisplay(zero){
    count = 0;
    answerDisplay.value = 0;
    answerDisplay2.value = 0;
    operator = '';
    turn = true;
    document.getElementById("clearBtn").innerHTML = 'AC';
}

function sign(){
    if(turn = true){
        mathAnswer = parseFloat(answerDisplay.value, 10);
        mathAnswer *= -1; 
        answerDisplay.value = mathAnswer;       
    }
    else{
        mathAnswer2 = parseFloat(answerDisplay2.value, 10);
        mathAnswer2 *= -1;
        answerDisplay2.value = mathAnswer2;
    }
}

function percent(){
    if(turn == true){
        mathAnswer = parseFloat(answerDisplay.value, 10);
        mathAnswer /= 100; 
        answerDisplay.value = mathAnswer;       
    }
    else{
        mathAnswer2 = parseFloat(answerDisplay2.value, 10);
        mathAnswer2 /= 100;
        answerDisplay2.value = mathAnswer2;
    }
}

let decCount = 0;
function decimal(dec){
    console.log(decCount);
    console.log(turn);
    if(decCount == 0 && turn == true){
        answerDisplay.value += dec;
        
        console.log("hi");
        decCount++;
    }
    if(decCount == 0 && turn == false){
        answerDisplay.value += dec;
        
        console.log("hi2");
        decCount++;
    }
}

function display(finAns){
    console.log("calcCount: " + calcCount);
    console.log(mathAnswer);
    console.log(mathAnswer2);
    answerDisplay.value = null;
    answerDisplay.value += finAns;
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
  
        
    if(turn == true && inputCount <= 9){
        answerDisplay.value += input;
        console.log("logged");
    }    



    if(turn == false && inputCount <= 9){
        
        
        answerDisplay.value += input;
        console.log("logged");
    }
    inputCount++;
    
    console.log(turn);
    
}



function calc(){
    if(calcCount > 0){
        
        finalAnswer += mathAnswer2;
    }
    mathAnswer = temp;
    console.log(mathAnswer);
    mathAnswer2 = parseFloat(answerDisplay.value, 10);
    console.log(mathAnswer2);

    switch(operator){
        case '+':
            finalAnswer = mathAnswer + mathAnswer2; 
        break;
        case '-':
            finalAnswer = mathAnswer - mathAnswer2;
        break;
        case '*':
            finalAnswer = mathAnswer * mathAnswer2;
        break;
        case '/':
            finalAnswer = mathAnswer / mathAnswer2;
        break;
    }

    console.log(finalAnswer);
    answerDisplay2.value = null;
    operator = '';
    display(finalAnswer);
    calcCount++;
    decCount = 0;
    
}

function sum(){
    decCount = 0;
    console.log(count);
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
}

