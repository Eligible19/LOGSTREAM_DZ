const input = document.getElementById('exp');
const buttonEqually = document.getElementById('=');
const buttonClear = document.getElementById('C');
const attention = document.getElementById('attention');
const buttonClearHistory = document.getElementById('CH');

//КАЛЬКУЛЯТОР КОРРЕКТНО РАБОТАЕТ ТОЛЬКО ИСПОЛЬЗУЯ КНОПКИ, РУЧНОЙ ВВОД НЕ БЫЛ СДЕЛАН НОРМАЛЬНО.


function enter(element){ //Проверка Input на ввод операторов два раза подряд
    let i = input.value.length;
    let Value = element.textContent;

    if(((input.value[i-1] === "*") || (input.value[i-1] === "/") || (input.value[i-1] === "-") || (input.value[i-1] === "+")) && ((input.value[i-2] === "*") || (input.value[i-2] === "/") || (input.value[i-2] === "-") || (input.value[i-2] === "+"))) {
        Value = '';
        attention.style.opacity = '1';
    }
    else {
        attention.style.opacity = '0';
    }

    input.value += Value;
}

buttonEqually.addEventListener('click', append); //Добавление элемента в список истории
function append(){
    let Result = calculate(filter().number1, filter().number2, filter().operator);

    const newBlock = document.createElement('div');
    newBlock.className = 'history-block';
    newBlock.textContent = Result;
    document.getElementsByClassName('history-content')[0].appendChild(newBlock);
}

function filter(){ //Функция, которая из всей строки Input отбирает number1 - строка ДО оператора, number2 - строка ПОСЛЕ оператора, operator - сам оператор
    let number1 = '';
    let number2 = '';
    let operator = '';
    i = 0;
    const op = ["*", "/", "+", "-"];
    for (i; i < input.value.length; i++){
        if (op.includes(input.value[i])){
            operator = input.value[i];
            i++;
            break;
        }
        number1 += input.value[i];
    }
    for (i; i < input.value.length; i++){
        number2 += input.value[i];
    }
    return {
        number1, number2, operator
    };
}

function calculate(number1, number2,operator){ //Считаем результат
    let result;

    if (operator === "*"){
        result = (+number1) * (+number2);
    }

    if (operator === "/"){
        result = (+number1) / (+number2);
    }
    
    if ((operator === "/") && (number2 === "0")) {
        result = 'Ошибка';
    }

    if(operator === "+"){
        result = (+number1) + (+number2);
    }

    if (operator === "-"){
        result = (+number1) - (+number2);
    }

    return result;
}

buttonClear.addEventListener('click', clear); //Очистка Input
function clear(){
    input.value= '';
}

buttonClearHistory.addEventListener('click', clearH); //Очистка Истории оперций
function clearH(){
    const historyCont = document.getElementById('historyCont');
    historyCont.textContent = '';
}



















