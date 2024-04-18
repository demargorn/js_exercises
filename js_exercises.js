'use strict';

let arr, string;

// * установи расширение Better Comments в VS Code
// ? https://github.com/lydiahallie/javascript-questions
// ? https://code.mu/ru/javascript/tasker/stager/5/1/

// ! бенчмарк.
const start = performance.now();
// Код, который нужно измерить
const end = performance.now();
// console.log(`Время выполнения: ${end - start} миллисекунд`);

// ! Капитализация строки в JavaScript.
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// ! метод reduce.
// let result = arr.reduce((acc, el) => acc + el, 0);

// ! Генерация случайного числа в заданном диапазоне.
const randomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// ! Проверка числа на четный(true)/нечетный(false)
const isEvenBit = (num) => num & 1 ? false : true;

// ! Проверка порядкового номера дня в году.
const dayOfYear = (day = new Date()) => Math.floor((day - new Date(day.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
// console.log(dayOfYear()); // 16 марта 2024 = 76 день года

// ! Вывод времени из объекта даты.
const timeFromDate = (date = new Date()) => date.toTimeString().slice(0, 8);
// console.log(timeFromDate()); // 16:21:57

// ! Вычисление коиличества дней между двумя датами.
const daysDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86_400_000)
// console.log(daysDif(new Date('2017-02-03'), new Date('2020-02-03'))); // 1095 дней

// ! Проверка, является ли день будним днем.
const isWeekDay = (date = new Date()) => date.getDay() % 6 !== 0;

// ! Проверка, является ли день выходным днем.
const isWeekend = (date = new Date()) => date.getDay() % 6 === 0;

// ! // Получаем количество дней в месяце.
var daysInMonth = new Date('year', 'month', 0).getDate(); // 'year' и 'month' = number

// ! Случайное логическое значение.
const randomBoolean = () => Math.random() >= 0.5; // true or false

// ! Случайное перемешивание элементов массива.
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());

// ! Сколько раз определенный символ встречается в данной строке.
const countCurrences = (str, char) => str.split(char).length - 1;
// console.log(countCurrences('banana', 'n'));


// Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
const isPositive = (num) => (num > 0) ? true : false;
// console.log(isPositive(10)); // ok


// Дана строка. Выведите в консоль длину этой строки.
string = 'sgferwerfgdsfg';

const showStringLength = (str) => str.length;
// console.log(showStringLength(string)); // ok

// Дана строка. Выведите в консоль последний символ строки.
string = 'string';
// console.log(string[string.length - 1]); // ok


// Дано число. Проверьте, четное оно или нет.
const isEven = (num) => {
    if (num % 2 === 0) return true;
    else return false;
};
// console.log(isEven(11)); // ok


// Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.
const giveLastLetter = (word) => word[word.length - 1] === 'ь' ? word[word.length - 2] : word[word.length - 1];
// console.log(giveLastLetter('гойда')); // ok


// Дано число. Выведите в консоль первую цифру этого числа.
const giveFirstDigit = (num) => {
    const string = num.toFixed();
    return +string[0];
};
// console.log(giveFirstDigit(356)); // ok


// Дано число. Выведите в консоль последнюю цифру этого числа.
const giveLastDigit = (num) => {
    const string = num.toFixed();
    return +string[string.length - 1];
};
// console.log(giveLastDigit(356)); // ok


// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
const giveSumOfFirstAndLastDigit = (num) => {
    const string = num.toFixed();
    return (+string[0]) + (+string[string.length - 1]);
};
// console.log(giveSumOfFirstAndLastDigit(1356)); // ok


// Дано число. Выведите количество цифр в этом числе.
const giveDigitQuantity = (num) => {
    const string = num.toFixed();
    return string.length;
};
// console.log(giveDigitQuantity(163)); // ok


// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
const firstDigitsIsSame = (num1, num2) => {
    const string1 = num1.toFixed();
    const string2 = num2.toFixed();

    return string1[0] === string2[0] ? true : false;
};
// console.log(firstDigitsIsSame(14253, 167438)); // ok


// Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.
const givePenultLetterInString = (str) => str.length > 1 ? str[str.length - 2] : null;
// console.log(givePenultLetterInString('вj')); // ok


// Даны два целых числа. Проверьте, что первое число без остатка делится на второе.
const numOneDivideNumTwo = (num1, num2) => num1 % num2 === 0 ? true : false;
// console.log(numOneDivideNumTwo(200, 10)); // ok


// Выведите в консоль все целые числа от 1 до 100.
const showPositiveNumbers = () => {
    let counter = 0;

    for (let i = 0; i < 100; i += 1) {
        console.log(i);
        counter += 1;
    };

    return counter;
};
// console.log(showPositiveNumbers()); // ok


// Выведите в консоль все целые числа от -100 до 0.
const showNegativeNumbers = () => {
    let counter = 0;

    for (let i = -100; i <= 0; i += 1) {
        console.log(i);
        counter += 1;
    };
    return true;
};
// console.log(showNegativeNumbers()); // ok


// Выведите в консоль все четные числа из промежутка от 1 до 100.
const isEven100 = () => {
    let counter = 0;

    for (let i = 0; i < 100; i += 1) {
        if (i % 2 === 0) {
            console.log(i);
        };
        counter += 1;
    };

    return counter;
};
// console.log(isEven100()); // ok


// Выведите в консоль все числа кратные трем в промежутке от 1 до 100.
const isMultipleThree100 = () => {
    for (let i = 0; i < 100; i += 1) {
        if (i % 3 === 0) {
            console.log(i);
        };
    };

    return true;
};
//  console.log(isMultipleThree100()); // ok


// Найдите сумму всех целых чисел от 1 до 100.
const sumTo100 = () => {
    let sum = 0;

    for (let i = 0; i < 100; i += 1) {
        sum += i;
    };

    return sum;
};
// console.log(sumTo100()); // ok


// Найдите сумму всех целых четных чисел в промежутке от 1 до 100.
const sumEvenTo100 = () => {
    let sum = 0;

    for (let i = 0; i < 100; i += 1) {
        if (i % 2 === 0) {
            sum += i;
        };
    };

    return sum;
};
// console.log(sumEvenTo100()); // ok


// Даны два целых числа. Найдите остаток от деления первого числа на второе.
const oneDivideTwo = (a, b) => {
    return a % b;
};
// console.log(oneDivideTwo(6, 5)); // ok


// Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.
const showStringReverse = (str) => str.split('').reverse().join();
// console.log(showStringReverse('mercedes')); // ok


// Дан массив с числами. Найдите сумму квадратов элементов этого массива.
let arrOfNum = [22, 32, 44, 5, 60, 12, 23, 21, 44, 90];

const showSumSquareArrElements = (arr) => {
    let sum = 0;

    arr.forEach(el => {
        sum += el ** 2;
    });

    return sum;
};
// console.log(showSumSquareArrElements(arrOfNum)); // ok


// Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.
const showSumSqrtArrElements = (arr) => {
    let sum = 0;

    arr.forEach(el => {
        sum += Math.sqrt(el);
    });

    return sum.toFixed(2);
};
// console.log(showSumSqrtArrElements(arrOfNum)); // ok


// Получите массив букв этой строки.
string = 'abcdefg';

const strToArr = (str) => str.split('');
// console.log(strToArr(string)); // ok


// Получите массив цифр этого числа.
let numbers = 123456;

const numToArr = (numbers) => numbers.toFixed().split('');
// console.log(numToArr(numbers)); // ok


// Дано некоторое число. Переверните его.
const numReverse = (num) => +num.toFixed().split('').reverse().join('');
// console.log(numReverse(123456)); // ok


// Найдите сумму цифр этого числа.
const sumNumbers = (num) => {
    let sum = 0;

    const arr = num.toFixed().split('');
    arr.forEach(el => {
        sum += +el;
    });
    console.log(sum);
    return sum;
};
// sumNumbers(numbers); // ok


// Заполните массив целыми числами от 1 до 10.
const pushNumArr = () => {
    const arr = [];

    for (let i = 1; i <= 10; i += 1) {
        arr.push(i);
    };

    return arr;
};
// console.log(pushNumArr()); // ok


// Заполните массив четными числами из промежутка от 1 до 100.
const pushArrTo100 = () => {
    const arr = [];

    for (let i = 1; i <= 100; i += 1) {
        arr.push(i);
    };

    return arr;
};
// console.log(pushArrTo100()); // ok


// Дан массив с дробями. Округлите эти дроби до одного знака в дробной части.
const arrFraction = [1.456, 2.125, 3.32, 4.1, 5.34];

const showArrToOneDigit = (arr) => arr.map(el => +el.toFixed(1));
// console.log(showArrToOneDigit(arrFraction)); // ok


// Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.
arrOfNum = [22, 32, 44, 5, 60, 12, 23, 21, 44, 90];

const increaseArr10percent = (arr) => arr.map(el => el += (el *= 0.1));
// console.log(increaseArr10percent(arrOfNum)); // ok


// Дается строка чисел, разделенных пробелами, и вы должны вернуть наибольшее и наименьшее число.
const highAndLowFunc = (args) => {
    let arr = args.split(' ');

    return `${Math.max(...arr)} ${Math.min(...arr)}`;
};
// console.log(highAndLowFunc("1 2 3 4 5")); // ok


// Даны два массива. Слейте эти массивы в новый массив.
let arrOne = [1, 2, 3];
let arrTwo = [4, 5, 6];

const concatArrs = arrOne.concat(arrTwo);
// console.log(concatArrs); // ok


// Дана некоторая строка. Найдите позицию первого нуля в строке.
string = '1230450';

const findZero = (str) => str.indexOf(0);
// console.log(findZero(string)); // ok


// Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.
const compareFirsrAndLastLetter = (wordOne, wordTwo) => wordOne[wordOne.length - 1] === wordTwo[0] ? true : false;
// console.log(compareFirsrAndLastLetter('секунда', 'абориген')); // ok


// Даны числа, разделенные запятыми, найдите сумму этих чисел.
let numstring = '12,34,56';

const numstringFunc = (str) => {
    let arr = str.split(',');
    let sum = 0;

    arr.forEach(el => {
        sum += +el;
    });

    return sum;
};
// console.log(numstringFunc(numstring)); // ok


// Дана некоторая строка. Переведите в верхний регистр все нечетные буквы этой строки. Должно получится следующее: 'AbCdE'
string = 'asdfdwe';

const upperOddLetters = (str) => {
    let arr = [];

    str.split('').map((letter, i) => {
        if (i % 2 === 0) {
            arr.push(letter.toUpperCase());
        } else {
            arr.push(letter);
        };
    });
    return arr.join('')
};
// console.log(upperOddLetters(string)); // ok


// Дана некоторая строка, например, вот такая. Получите массив позиций всех нулей в этой в строке.
string = '023m0df0df0g0вапавп0';

const findZeroPosition = (str) => {
    let arr = str.split('');
    let arrOfZero = [];

    arr.forEach((sym, i) => {
        if (sym === '0') {
            arrOfZero.push(i);
        };
    });

    return arrOfZero;
};
// console.log(findZeroPosition(string)); // ok


// Дана некоторая строка. Удалите из этой строки каждый третий символ.
string = '123456789';

const removeEveryThirdSym = (str) => {
    let arr = str.split('');

    for (let i = arr.length; i > 0; i -= 1) {
        if ((i + 1) % 3 === 0) {
            arr.splice(i, 1);
        };
    };
    return arr.join('');
};
// console.log(removeEveryThirdSym(string)); // ok


// Дан некоторый массив, например, вот такой. Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.
arr = [10, 20, 30, 4, 50, 60];

const sumEvenElements = (arr) => {
    let sumEven = 0;
    let sumOdd = 0;

    arr.forEach((el, i) => {

        if (i % 2 === 0) {
            sumEven += el;
        } else {
            sumOdd += el;
        };
    });

    return (sumEven / sumOdd).toFixed(2);
};
// console.log((sumEvenElements(arr))); // ok


// Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.
string = 'dw234f45gfg67jddfg4322';

const getArrOfNumInString = (str) => {
    let arr = str.split('');
    let arrIdx = [];

    arr.forEach((el, i) => {
        if (!isNaN(el)) arrIdx.push(i);
    });

    return arrIdx;
};
// console.log(getArrOfNumInString(string)); // ok


// Отсортируйте элементы в каждом подмассиве.
arr = [
    [2, 1, 4, 3, 5],
    [3, 5, 2, 4, 1],
    [4, 3, 1, 5, 2],
];

const sortFunc = (arr) => {
    arr.forEach(el => {
        el.sort((a, b) => a - b);
    });

    return arr;
};
// console.log(sortFunc(arr)); // ok


// Создайте функцию, которая возвращает сумму двух наименьших положительных чисел для массива, состоящего минимум из 4 положительных целых чисел.
const sumTwoSmallestNum = (arr) => {
    arr.sort((a, b) => a - b);
    return (arr[0] + arr[1]);
};
// console.log(sumTwoSmallestNum([52, 76, 14, 12, 4])); // ok


// Реализуйте функцию, которая складывает два числа и возвращает их сумму в двоичном виде.
const addBinary = (a, b) => {
    let c = a + b;
    return c.toString(2);
};
// console.log(addBinary(5, 9)); // ok


// Напишите алгоритм, который берет массив и перемещает все нули в конец, сохраняя порядок следования остальных элементов.
const moveZeros = (arr) => {
    arr.forEach((el, i) => {
        if (el === 0) {
            arr.splice(i, 1);
            arr.push(el);
        };
    });
    console.log(arr);
    return arr;
};
// moveZeros([1,2,0,1,0,1,0,3,0,1]); // ok


// Cоздать функцию, которая может принимать в качестве аргумента любое неотрицательное целое число и возвращать его с цифрами в порядке убывания.
const descendingOrder = (n) => {
    let arr = String(n).split('');

    arr.sort((a, b) => b - a);

    let num = arr.join('');

    return +num;
};
// console.log(descendingOrder(123456789)); // ok


// Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9) и возвращает строку этих чисел в виде номера телефона.
const createPhoneNumber = (arr) => {
    let format = '(xxx) xxx-xxxx';

    arr.forEach(el => {
        format = format.replace('x', el);
    });

    return format;
};
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // ok


// кэширующая функция.
const add = () => {
    const cache = [];

    return (num) => {
        if (cache.includes(num)) {
            return `Из кэша: ${cache[num]}`;
        } else {
            const result = num + 10;
            cache[num] = result;
            cache.push(num);            
            return `Вычисляю: ${result}`;
        };
    };
};
// const addFunction = add(); // ok
// console.log(addFunction(10));
// console.log(addFunction(10));
// console.log(addFunction(5 * 2));


// кэширующая функция-декоратор.
function cachingDecoratorNew(func) {
    const cache = [];

    function wrapper(...args) {
        let hash = args.join();

        if (cache.includes(hash)) {
            console.log(`Из кеша: ${cache[hash]}`);
            return `Из кэша: ${cache[hash]}`;
        } else {
            const result = func(...args);
            cache[hash] = result;
            cache.push(hash);

            if (cache.length > 5) {
                cache.shift();
            };
            console.log(`Вычисляем: ${result}`);
            return `Вычисляем: ${result}`;
        };
    };
    return wrapper;
}; // ok

const addThree = (a, b, c) => a + b + c;
const upgradedAddThree = cachingDecoratorNew(addThree);
// upgradedAddThree(1, 2, 3); // вычисляем: 6
// upgradedAddThree(1, 2, 3); // из кэша: 6
// upgradedAddThree(2, 2, 3); // вычисляем: 7
// upgradedAddThree(3, 2, 3); // вычисляем: 8
// upgradedAddThree(4, 2, 3); // вычисляем: 9
// upgradedAddThree(5, 2, 3); // вычисляем: 10
// upgradedAddThree(6, 2, 3); // вычисляем: 11   (при этом кэш для 1, 2, 3 уничтожается)
// upgradedAddThree(1, 2, 3); // вычисляем: 6  (снова вычисляем, кэша нет)


// сортировка
let users = [
    {
        name: 'Alex',
        birthday: new Date(2017, 4, 2),
    },
    {
        name: 'Olga',
        birthday: new Date(2011, 7, 11),
    },
    {
        name: 'Andrey',
        birthday: new Date(1997, 12, 8),
    }
];

const sortUsers = (arr, prop, dir = false) => arr.sort((a, b) => (!dir ? a[prop] < b[prop] : a[prop] > b[prop]) ? -1 : 1);
// arr - массив, prop - свойство, dir - направление сортировки
// console.log(sortUsers(users, 'name')); // ok


// фильтрация
const filterFunc = (arr, prop, value) => {
    const result = [];

    for (let item of arr) {
        if (String(item[prop]).includes(value)) result.push(item);
    };
    console.log(result);
    return result;
};
// filterFunc(users, 'name', 'Olga'); // ok


// Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2 = [1, 2, 3, 4, 5, 6];

const removeLastElements = (arr1, arr2) => {
    if (arr1.length === arr2.length) return `Массивы равны`;
    if (arr1.length > arr2.length) {
        for (let i = (arr1.length - arr2.length - 1); i >= 0; i -= 1) {
            arr1.pop();
        };
    } else {
        for (let i = (arr2.length - arr1.length - 1); i >= 0; i -= 1) {
            arr2.pop();
        };
    };

    return [arr1, arr2];
};
// console.log(removeLastElements(arr1, arr2)); // ok


// Дана некоторая переменная с числом. Сделайте строку, содержащую столько нулей, сколько указано в переменной.
let num = 5; // '00000'

const returnZeros = (num) => '0'.repeat(num);
// console.log(returnZeros(17)); // ok


// Дан массив. Найдите сумму элементов этого массива.
arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

const sumFlatArr = (arr, flat = 5) => {
    let sum = 0;

    arr.flat(flat).forEach(el => {
        sum += el;
    });
    
    return sum;
};
// console.log(sumFlatArr(arr)); // ok


// Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов.
arr = ['asd', 'werfg', 'dfskjvf', 'sdf', 'weer', 'qty'];

const removeWordsLessThreeSym = (arr) => arr.filter(el => el.length <= 3);
// console.log(removeWordsLessThreeSym(arr)); // ok


// Дано некоторое слово. Проверьте, что это слово читается одинаково с любой стороны.
let word = 'abcba';

const isWordPalindrom = (word) => word === word.split('').reverse().join('') ? true : false;
// console.log(isWordPalindrom(word)); // ok


// Дан следующий объект. Найдите сумму элементов этого объекта.
let object = {
    1: {
        1: 11,
        2: 12,
        3: 13,
    },
    2: {
        1: 21,
        2: 22,
        3: 23,
    },
    3: {
        1: 24,
        2: 25,
        3: 26,
    },
};

const sumKeysAndValues = (obj) => {
    let sumKeys = 0;
    let sumValues = 0;
    let newObj;

    let one = obj['1'];
    Object.keys(one).forEach(key => sumKeys += +key);
    Object.values(one).forEach(value => sumValues += value);

    let two = obj['2'];
    Object.keys(two).forEach(key => sumKeys += +key);
    Object.values(two).forEach(value => sumValues += value);

    let three = obj['3'];
    Object.keys(three).forEach(key => sumKeys += +key);
    Object.values(three).forEach(value => sumValues += value);

    newObj = { sumKeys, sumValues }

    console.log(newObj);
    return newObj;
};
// sumKeysAndValues(object); // ok


// Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.
arr = [50, 23, 25, 55, 2, 23, 12, 6, 10];

for (let i = arr.length - 1; i >= 0; i -= 1) {
    if (arr[i] % 5 !== 0) {
        arr.splice(i, 1);
    };
};
// console.log(arr); // ok


// Напишите программу, которая сформирует следующую строку:
let str = '-1-2-3-4-5-';

const program = () => '-1-2-3-4-5-';
// console.log(program()); // ok


// Дан некоторый массив. Слейте все элементы этого массива в один массив, разбив их посимвольно:
arr = [123, 456, 789];
arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.join('').split('')); // ok


// Дано число, например. Проверьте, что все цифры этого числа больше нуля.
num = 123405;

const allDigitAreMoreThanZero = (num) => {
    let arr = num.toString().split('');
    if (arr.every(el => el > 0)) return true;
    else return false;
};
// console.log(allDigitAreMoreThanZero(num)); // ok


// Найдите все множители числа num 
function getDividers(num) {
    let dividers = [];

    for (let i = 2; i < num; i += 1) {
        if (num % i === 0) {
            dividers.push(i);
        };
    };
    console.log(dividers);
    return dividers;
};
// getDividers(256); // ok


// Дана строка в формате. Преобразуйте ее в формат:
str = 'kebab-case';
let str2 = 'snake_case';
// console.log(str.replace(/\-/g, '_')); // ok


// Сформируйте с помощью циклов следующий массив:
arr = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
];

arr2 = [];
for (let i = 1; i <= 3; i += 1) {
    arr2.push(i);
};

let arr3 = [];
for (let i = 0; i <= 4; i += 1) {
    arr3.push(arr2);
};
// console.log(arr3); // ok


// Дана строка. Проверьте, что эта строка состоит только из цифр.
str = '12359649';
// console.log(isNaN(str)); // ok


// Нечетный или четный
arr = [0, 1, 4];

const oddOrEven = (arr) => {
    let sum = 0;

    arr.forEach(el => {
        sum += el;
        return sum;
    });

    return sum % 2 === 0 ? 'even' : 'odd';    
};
// console.log(oddOrEven(arr)); // ok


// Удалить первый и последний символ.
const removeChar = (str) => str.slice(1, str.length - 1);
// console.log(removeChar('country'));


// Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить числа в интервале от первого до второго принятого числа.
function showNumbersToMaxValue(counter, maxValue) {
    let interval = setInterval(() => {
        console.log(counter++);
        if (counter > maxValue) {
            clearInterval(interval);
        };
    }, 1000)
};
// showNumbersToMaxValue(0, 10) // ok


// Напишите функцию, которая принимает массив строк и возвращает каждую строку, дополненную нужным номером. ['a', 'b'] => [ '1: a', '2: b']
arr = ['a', 'b', 'c', 'd', 'f'];

function giveNumberToMembers(arr) {
    let result = arr.map((el, i) => (i + 1) + ': ' + el);
    
    console.log(result);
    return result;
};
// giveNumberToMembers(arr); // ok


// Дан массив. Сделайте так, чтобы в нем каждый элемент повторился два раза.
arr = [111, 235, 120, 130, 12, 213]

function giveDoubleMember(arr) {
    for (let i = arr.length - 1; i >= 0; i -= 1) {
        arr.splice(i, 0, arr[i]);
    };
    console.log(arr);
    return arr;   
};
// giveDoubleMember(arr); // ok


// Дан массив и число. Оставьте в массиве только те числа, которые являются делителями заданного числа.
const filterDividerNum = (arr, num) => {
    let result = arr.filter(el => el % num === 0);
    console.log(result);
    return result;
};
// filterDividerNum(arr, 2); // ok


const days = ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

// Сделайте функцию, которая вернет текущий день недели словом.
const showDayToday = (date = new Date()) => days[date.getDay()];
// console.log(showDayToday()); // понедельник


// Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.
const showDaysInSeconts = (sec) => sec / 3600 / 24;
// console.log(showDaysInSeconts(1036800)); // 12 суток, ok


// Сделайте функцию, которая параметром будет принимать число и строку и обрезать эту строку до длины, заданной первым параметром.
str = 'Ну, погоди'

const sliceString = (num, str) => str.slice(0, num);
// console.log(sliceString(5, str)); // ok


// Сделайте функцию, которая параметром будет принимать число, а возвращать сумму его делителей.
function showSumOfDividers(num) {
    let sum = 0;

    for (let i = 2; i < num; i += 1) { // не берем в рассчет 0, 1 и само число
        if (num % i === 0) sum += i;
    };
    console.log(sum);
    return sum;
};
// showSumOfDividers(14) // ok


// Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.
const sumOfDigits = function(num) {
    let sum = 0;
    num = String(num);

    for (let i = 0; i < num.length; i += 1) {
        sum += (num[i] * 10 / 10);
    };
    console.log(sum);
    return sum;
};
// sumOfDigits(666) // ok


// Сделайте функцию, которая параметром будет год и проверять, високосный он или нет.
// ! год должен быть кратен 4, но если он также кратен 100, то он должен быть кратен 400, чтобы считаться високосным.
function isLeapYear(year = new Date().getFullYear()) {
    return (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) ? true : false;
};
// console.log(isLeapYear(1601)); // ok


// Сделайте функцию, которая вернет массив всех високосных годов за промежуток времени.
function showLeapYears(min, max) {
    let years = [];

    for (let i = min; i <= max; i += 1) {
        if (i % 4 === 0 && i % 100 !== 0 || i % 400 === 0) years.push(i);        
    };
    console.log(years);
    return years;
};
// showLeapYears(1900, 2024); // ok


// Сделайте функцию, которая будет возвращать сколько дней осталось до конца текущего месяца.
const daysToTheEndOfTheMonth = function() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // получаем номер текущего месяца (январь = 1, февраль = 2, и так далее)
    const currentYear = currentDate.getFullYear();
    const currentDay = currentDate.getDate(); // получаем текущий день месяца    

    const endOfMonthDate = new Date(currentYear, currentMonth, 0); // создаем объект даты, устанавливая месяц и год на текущие значения, но день на 0
    const daysInCurrentMonth = endOfMonthDate.getDate(); // получаем количество дней в текущем месяце

    console.log(daysInCurrentMonth - currentDay);
    return daysInCurrentMonth - currentDay; // возвращаем разницу между количеством дней в месяце и текущим днем
};
// daysToTheEndOfTheMonth(); // ok


// Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка.
function pushArrSomeNumbers(min, max) {
    let arrayN = [];

    for (let i = min; i <= max; i += 1) {
        arrayN.push(i);
    };
    console.log(arrayN);
    return arrayN;
};
// pushArrSomeNumbers(10, 100); // ok


// Дана переменная со строкой. Проверьте, что в эта строка представляет собой число, то есть состоит только из цифр.
str = '128174761';

function allDigitsAreNumbers(str) {
    return isNaN(str) ? false : true;
    // return str.split().every(el => Number(el)) ? true : false; // вариант 2
};
// console.log(allDigitsAreNumbers(str)); // ok


// Сделайте функцию, которая параметром будет принимать массив с числами и возвращать второе по величине число.
arr = [12, 10, 2, 34, 54, 1, 106, 26, 99];

function showSecondBiggerNumber(arr) {
    return arr.sort((a, b) => b - a)[1]; 
};
// console.log(showSecondBiggerNumber(arr)); // ok


// Сделайте функцию, которая параметрами будет принимать два числа и возвращать массив, заполненный целыми числами от минимального параметра до максимального.
const arrMinToMaxNumbers = function(min, max) {
    let array = [];

    for (let i = min; i <= max; i += 1) {
        array.push(i);
    };    
    console.log(array);
    return array;
};
// arrMinToMaxNumbers(10, 100); // ok


// Сделайте функцию, которая заполнит массив случайными латинскими буквами.
function arrayWithRandomLetters(length) {
    const result = [];
    const letters = ['a','b','c','d','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    for (let i = 1; i < length; i += 1) {        
            result.push(letters[Math.round(Math.random() * letters.length)]); // ? Math.floor() или Math.round()? работает и так, и так 
    };
    console.log(result);
    return result;
};
// arrayWithRandomLetters(15) // ok


// Сделайте функцию, которая сгенерирует строку заданной длины, заполненную случайными латинскими буквами.
function stringWithRandomLetters(length) {
    const result = [];
    const letters = ['a','b','c','d','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    for (let i = 1; i < length; i += 1) {        
            result.push(letters[Math.round(Math.random() * letters.length)]); // ? Math.floor() или Math.round()? работает и так, и так 
    };
    console.log(result.join(''));
    return result.join('');
};
// stringWithRandomLetters(15)


// ! Сделайте функцию, которая параметром будет принимать дату в формате год-месяц-день, и определять, существует ли такая дата или нет.
function isValidDate(date) {
    let parts = date.split('-');
    const [year, month, day] = parts.map(Number); 
    var daysInMonth = new Date(year, month, 0).getDate();

    if (parts.length !== 3 || parts.some(el => (!/^\d/).test(el))) return false;     
    if (month < 1 || month > 12) return false;    
    if (day < 1 || day > daysInMonth) return false;

    return true;
};
// console.log(isValidDate("2023-02-28")); // true, так как 28 февраля 2023 года - корректная дата
// console.log(isValidDate("2023-13-32")); // false, так как 13 февраля не существует, а 32 дня в месяце - нет


// Сделайте функцию, которая параметром будет принимать массив с числами и заменять каждое число на массив его делителей.
arr = [12, 10, 2, 34, 54, 1, 106, 26, 99];

function removeElToHisDivider(arr) {
    function getDividers(el) {
        let dividers = [];
    
        for (let i = 2; i < el; i += 1) {
            if (el % i === 0) {
                dividers.push(i);
            };
        };
        return dividers;
    };
    console.log(arr.map(getDividers));
    return arr.map(getDividers);
};
// removeElToHisDivider(arr); // ok


// Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество дней, часов, минут и секунд, соответствующих этим секундам, в виде объекта:
const showObjectOfDate = function(sec) {
    let d = Math.floor(sec / 86400); // +
    sec -= d  *  86400;

    let h = Math.floor(sec / 3600);
    sec -= h  *  3600;

    let m = Math.floor(sec /  60);
    let s = sec -= m  *  60;

    console.log({d:d, h:h, m:m, s:s});
    return {d:d, h:h, m:m, s:s};
};
// showObjectOfDate(86410); // ok


// Сделайте функцию, которая параметром будет принимать два массива и возвращать массив их общих элементов.
arr1 = [0,1,2,3,4,5,6,10];
arr2 = [3,4,5,6,7,8,9,0,10];

function getArrOfSameEl(arr1, arr2) {
    let sameArr = [];

    arr1.filter(el => {
        el === arr2[el];
        sameArr.push(el);
    });
    console.log(sameArr);
    return sameArr;
};
// getArrOfSameEl(arr1, arr2) // ok


// Сделайте функцию, которая будет возвращать случайное число. Функция не должна возвращать одно и тоже число два раза подряд.
const returnRandomNumber = () => Math.round(Math.random() * 1000);
// console.log(returnRandomNumber()); // ok


// Сделайте функцию, которая параметром будет принимать массив и элемент и возвращать следующий за ним элемент.
arr = [0, 1, 2, 3, 4, 5, 6];
// func(arr, 1); // 2
// func(arr, 4); // 5
// func(arr, 5); // 1

function returnNextEl(arr, item) {
    let elem;

    for (let i = 0; i < arr.length; i += 1) {
        if (item === arr[i]) {
            elem = arr[i + 1];
        };            
        if (item === arr[arr.length - 1]) {
            elem = arr[0];
        };
    };
    console.log(elem);
    return elem;
};
// returnNextEl(arr, 6) // ok


// Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива.
arr = ['a','b','c','d','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function returnRandomEl(arr) {
    let randomNum;

    arr.forEach((el, i) => {
        randomNum = arr[Math.round(Math.random() * i)];
    });
    console.log(randomNum);
    return randomNum;
};
// returnRandomEl(arr); // ok


// Сделайте функцию, которая параметром будет принимать массив и возвращать массив из N случайных элементов этого массива.
function returnRandomArr(arr, count) {
    let randomArr = [];

    arr.forEach((el, i) => {
        if (i < count) randomArr.push(arr[Math.floor(Math.random() * arr.length)]);
    });
    console.log(randomArr);
    return randomArr;
};
// returnRandomArr(arr, 10) // ok


// Найти количество простых чисел от 0 до n
function isPrime(value) {
   for (let i = 2; i < value; i += 1) { // 0, 1 и 2 не берем в рассчет
       if (value % i === 0) return false; 
   };
   return true;
}; // проверить каждое число от 0 до n простое ли оно

function countPrimes(n) {
   let counter = 0;

   for (let i = 2; i <= n; i += 1) { // 0, 1 и 2 не берем в рассчет
       if (isPrime(i)) counter += 1;
   };
   return counter;
};
// console.log(countPrimes(12));


// Сделайте функцию, которая будет возвращать массив простых чисел из заданного промежутка.
const returnArrOfSimpleNumbers = function(min, max) {
    let array = [];

    for (let i = min; i <= max; i += 1) {
        if (isPrime(i)) array.push(i);
    };

    function isPrime(value) {
        for (let i = 2; i < value; i += 1) { 
            if (value % i === 0) return false; 
        };
        return true;
     };
     console.log(array);
     return array;     
};
// returnArrOfSimpleNumbers(11, 221); // ok


// Сделайте функцию, которая параметрами будет принимать любое количество чисел, а возвщать их сумму.
function sumArgs(...args) {
    return args.reduce((acc, value) => acc + value, 0);
};
// console.log(sumArgs(10, 11, 12, 13, 15)); // ok


// ! замыкания
let buttonProps = (borderRadius) => {
    const createVariantButtonProps = (variant, color) => {
        const newProps = {
            borderRadius,
            variant,
            color
      };
      return newProps;
    };
    return createVariantButtonProps;
};
let primaryButton = buttonProps("1rem"); 
const primaryButtonProps = primaryButton("primary", "red"); // ! не понятно как параметры попадают в createVariantButtonProps
// console.log(primaryButtonProps);


// Поиск в массиве элемента с длиной N
const names = ['Егор', 'Петр', 'Денис', 'Иван', 'Коля'];

let res = names.find(el => {
    if(el.length === 5) return true;
});
// console.log(res); // Денис


// Сделайте функцию, которая параметром будет принимать массив и перемешивать элементы этого массива в случайном порядке.
function sortArrRandom(arr) {
    return arr.sort(() => 0.5 - Math.random());
};
// console.log(sortArrRandom(names)); // ok


// Учитывая набор чисел, верните аддитивную обратную величину каждого из них. [1,-2,3,-4,5] => [-1,2,-3,4,-5]
arr = [12, -10, 2, 0, -34, -54, 1, -106, 26, -99];

const invertArr = (arr) => arr.map(el => el !== 0 ? -el : el);
// console.log(invertArr(arr)) // ok;