let a = Math.floor(Math.random() * 100);
let b = a; // Переменная для switch()
console.log(a + ' (Начальное значение)')
/*(a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7);*/

//if else
if (a > 10) {
    a;
}
else {
    a = a * 2;
}
if (a > 5) {
    a = 2*a + 1;
}
else {
    if (a < 3) {
        a = 1;
    }
    else {
        a = 2*(a - 2);
    }
}
if (a > 4) {
    a = 5;
}
else {
    if (a % 2 == 0) {
        a = 6;
    }
    else {
        a = 7;
    }
}
console.log(a);


//switch()
switch(b){
    case(b > 10): b;
    break;
    default: b = b * 2;
}
switch(b){
    case(b > 5): b = (2*a) + 1;
    break;
    default: switch(b) {
        case(b < 3): b = 1;
        break;
        default: b = 2*(b - 2)
    }
}
switch(true){
    case(b > 4): b = 5;
    break;
    default: switch(b) {
        case(b % 2 == 0): b = 6;
        break;
        default: b = 7;
    }
}

console.log(b);
