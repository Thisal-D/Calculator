export const devide = (num1, num2) =>{
    return num1 / num2;   
}


export const multiply = (num1, num2) =>{
    return num1 * num2;   
}


export const add = (num1, num2) =>{
    return num1 + num2;   

}

export const subtract = (num1, num2) =>{
    return num1 - num2;   
}


export const get_reciprocal = (str_number) => {
    let number = str_to_int_or_float(str_number);
    return 1 / number;
}

export const find_operator_from_operation = (operation) => {
    let operators = [' +', ' -', ' ×', ' ÷'];
    let i;
    for (i in operators){
        if (operation.includes(operators[i])){
            break;
        }
    }
    return operators[i];
}


export const str_to_int_or_float = (str_number) => {
    if (str_number.indexOf(".") === -1){
        return parseInt(str_number);
    }
    return parseFloat(str_number);
}


export const get_fist_number_from_operation = (operation) => {
    let operator = find_operator_from_operation(operation);
    let op_index = operation.indexOf(operator);

    return operation.substring(0, op_index);
}


export const get_sqr = (str_number) => {
    let number = str_to_int_or_float(str_number);
    return Math.pow(number, 2)
}


export const get_sqrt = (str_number) => {
    let number = str_to_int_or_float(str_number);
    return Math.sqrt(number)
}


export const get_without_negate = (operation) => {
    operation = operation.replace("negate(","")
    let str_number = operation.substring(0, operation.indexOf(')'));
    let number = str_to_int_or_float(str_number) * -1;
    number += " + 0 =";
    return number;
}


export const get_total = (operation) => {
    let operator = find_operator_from_operation(operation);
    let numbers_str = operation.split(operator);
    let numbers = [];
    for (let i in numbers_str){
        numbers.push(str_to_int_or_float(numbers_str[i]));
    }
    switch (operator){
        case " +":
            return add(numbers[0], numbers[1]);
        case " -":
            return subtract(numbers[0], numbers[1]);
        case " ×":
            return multiply(numbers[0], numbers[1]);
        case " ÷":
            return devide(numbers[0], numbers[1]);
        default:
            return 0;
    }
}