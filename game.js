/*
//  Задание: (ВОЗВЕДЕНИЕ В СТЕПЕНЬ)

let num = +prompt('Введите число, которые будете возводить в степень.');

while (isNaN(num) || num == 0) {
    num = +prompt('Введите число, которые будете возводить в степень.');
}

let degree = +prompt('Введите степень для вашего числа.');

if (isNaN(degree) || degree == 0) {
    degree = 2;
}

let answer = Math.pow(num, degree)


alert(answer);

 */

/*
    Задание: (ЛЕСТНИЦА)
    
let quantity = +prompt('Введите количество ступеней лестницы.');

while (isNaN(quantity) || quantity == 0 || quantity == null) {
    quantity = +prompt('Введите количество ступеней лестницы.');
}

let symbolstart = prompt('Введите символ отступов.');

while (symbolstart == '') {
    symbolstart = prompt('Введите символ отступов.');
}

let symbolend = prompt('Введите конечный символ.');

while (symbolend == '') {
    symbolend = prompt('Введите конечный символ.');
}

for (let i = 1; i <= quantity; i++) {    
    symbolstart += symbolstart ;
    console.log(symbolstart + symbolend);
}


*/
