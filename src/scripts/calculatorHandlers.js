import {
    get_total,
    get_fist_number_from_operation,
    get_reciprocal,
    get_sqr,
    get_sqrt,
    str_to_int_or_float,
    get_without_negate
} from './Operations.js' ;


export const handleOperatorClick = (operator) => {
    const calculatorInputEl = document.getElementById('calculator-head-input');
    const calculatorFinalHistroyEl = document.getElementById('calculator-final-histroy');
   

    if (calculatorInputEl.value === "" & calculatorFinalHistroyEl.textContent === ''){
        return;
    }

    if (calculatorFinalHistroyEl.textContent === '' & !(calculatorInputEl.value === "")){
        if (operator!=="="){
            calculatorFinalHistroyEl.textContent = calculatorInputEl.value + " " + operator;
            calculatorInputEl.value = '';
        }
    }

    else if (!(calculatorFinalHistroyEl.textContent === '') & calculatorInputEl.value === "" & operator !== "="){
        let num = get_fist_number_from_operation(calculatorFinalHistroyEl.textContent);
        calculatorFinalHistroyEl.textContent = num  +  " " + operator;
        calculatorInputEl.value = '';
    }

    else if (!(calculatorFinalHistroyEl.textContent === '') & !(calculatorInputEl.value === "")){
        let histroy = calculatorFinalHistroyEl.textContent;
        if (histroy.includes("negate")){
            histroy = get_without_negate(histroy);
        }
        let current = calculatorInputEl.value
        let operation = histroy + current;
        let total = get_total(operation);
       
        if (operator==="="){
            if (!histroy.endsWith("=")){
                calculatorFinalHistroyEl.textContent += " " + current + " " + operator;
                calculatorInputEl.value = total;
            }
        }
        else{
            calculatorFinalHistroyEl.textContent = total + " " + operator;
            calculatorInputEl.value = '';
        }
    }
};


export const handleSpecialOperatorClick = (spec_operator) => {
    const calculatorInputEl = document.getElementById('calculator-head-input');
    const calculatorFinalHistroyEl = document.getElementById('calculator-final-histroy');
    if (spec_operator==="reciprocal"){
        if (calculatorFinalHistroyEl.textContent.endsWith("=")){
            calculatorFinalHistroyEl.textContent = "1 / " + calculatorInputEl.value + " =";
            calculatorInputEl.value = get_reciprocal(calculatorInputEl.value);
        }
        else if (!(calculatorInputEl.value==="")){
            calculatorInputEl.value = get_reciprocal(calculatorInputEl.value);
        }
    }
    else if (spec_operator==="sqr"){
        if (calculatorFinalHistroyEl.textContent.endsWith("=")){
            calculatorFinalHistroyEl.innerHTML= calculatorInputEl.value + "<sup>2</sup> =";
            calculatorInputEl.value = get_sqr(calculatorInputEl.value);
        }
        else if (!(calculatorInputEl.value==="")){
            calculatorInputEl.value = get_sqr(calculatorInputEl.value);
        }
    }
    else if (spec_operator==="sqrt"){
        if (calculatorFinalHistroyEl.textContent.endsWith("=")){
            calculatorFinalHistroyEl.innerHTML=  "√" + calculatorInputEl.value + " =";
            calculatorInputEl.value = get_sqrt(calculatorInputEl.value);
        }
        else if (!(calculatorInputEl.value==="")){
            calculatorInputEl.value = get_sqrt(calculatorInputEl.value);
        }
    }
    else if (spec_operator==="+-"){
        if (calculatorFinalHistroyEl.textContent.endsWith("=")){
            calculatorFinalHistroyEl.innerHTML=  "negate(" + calculatorInputEl.value + ") =";
            calculatorInputEl.value = str_to_int_or_float(calculatorInputEl.value) * -1;
        }
        else if (!(calculatorInputEl.value==="")){
            calculatorInputEl.value = str_to_int_or_float(calculatorInputEl.value) * -1;
        }
    }
};


export const handleCommandClick = (command) => {
    // calculatorHandlers.js
    const calculatorInputEl = document.getElementById('calculator-head-input');
    const calculatorFinalHistroyEl = document.getElementById('calculator-final-histroy');
    switch (command){
        case 'CE':
            if (calculatorFinalHistroyEl.textContent.endsWith("=")){
                calculatorFinalHistroyEl.textContent = ''
            }
            calculatorInputEl.value = '';
            break;
        case 'C':
            calculatorInputEl.value = '';
            calculatorFinalHistroyEl.textContent = '';
            break;
        case '⌫':
            if (calculatorFinalHistroyEl.textContent.endsWith("=")){
                calculatorFinalHistroyEl.textContent = ''
            }
            calculatorInputEl.value = calculatorInputEl.value.slice(0, -1);
            break;
        default:
            break;
    }
};


export const handleNumberClick = (number) => {
    // calculatorHandlers.js
    const calculatorInputEl = document.getElementById('calculator-head-input');
    calculatorInputEl.value += number;     
};


export const handleDecimalClick = (decimal) => {
    const calculatorInputEl = document.getElementById('calculator-head-input');
    if (calculatorInputEl.value.indexOf(".") === -1){
        calculatorInputEl.value += "."
    }
};
