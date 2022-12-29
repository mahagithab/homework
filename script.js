// 1. Вам дана переменная str = ‘LIGHTCODE PROGRAMMING’. Выведите в консоль длину первого слова.

// 2. Вам дана переменная str = 'Максимально УЖАСНО'. Выведите в консоль слово УЖАСНО, только нижним регистром.

// 3. Вам дана переменная str = 'максимально УЖАСНО'. Выведите в консоль слово максимально, только верхним регистром.

// 4. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль 'мально Ужасно', используя метод slice.

// 5. Вам даны переменные str = 'Максимально', str2 = 'Ужасно'. Выведите в консоль соединенные строки

// 6. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс слова 'Ужасно'.

// 7. Вам дана переменная str = 'Максимально Ужасно'.

//     Выведите в консоль "встречается более 1 раза",

//     если букв 'a' встречается более 1 раза, иначе "встречается менее одного раза"

//    8. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого вхождения буквы а.

//    9. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого последнего буквы о.



// 10. Вам дана переменная str = 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice) и выведите в консоль.


// 1. Вам дана переменная str = ‘LIGHTCODE PROGRAMMING’. Выведите в консоль длину первого слова.


// let str = "LIGHTCODE PROGRAMMING"
// let newStr = str.substring(0,9)

// console.log(newStr.length)

//pop   push мутирует


// let str = "LIGHTCODE PROGRAMMING"
// let newStr = str.split("")

// console.log(newStr)



// let str = "LIGHTCODE PROGRAMMING"
// let newStr = str.split(" ")

// console.log(newStr)


// let str = "LIGHTCODE PROGRAMMING"
// let newStr = str.split(" ")

// console.log(newStr[0])



// let str = "LIGHTCODE PROGRAMMING"
// let newStr = str.split(" ")

// console.log(newStr[0].length)


// let str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi minus expedita nam est, incidunt consequuntur error tempore ducimus excepturi non quia quo dicta laborum asperiores, vitae quibusdam facere laudantium repellat."
// let newStr = str.split(" ")

// console.log(newStr)


// let str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi minus expedita nam est, incidunt consequuntur error tempore ducimus excepturi non quia quo dicta laborum asperiores, vitae quibusdam facere laudantium repellat."
// let newStr = str.split("")

// console.log(newStr)


// 2. Вам дана переменная str = 'Максимально УЖАСНО'. Выведите в консоль слово УЖАСНО, только нижним регистром.

// let str = 'Максимально УЖАСНО'
// let newStr = str.split(" ")

// console.log(newStr)


// let str = 'Максимально УЖАСНО'
// let newStr = str.split(" ")

// console.log(newStr[1])

// let str = 'Максимально УЖАСНО'
// let newStr = str.split(" ")

// console.log(newStr[1].toLowerCase())


// 3. Вам дана переменная str = 'максимально УЖАСНО'. Выведите в консоль слово максимально, только верхним регистром.
 
//Kонкатинация называется

// let str = "максимально "
// let str2 = "УЖАСНО"

// console.log(str + " " + str2)

//concat method

// let arr = 'test'
// let arr= newArr.split('')
// let newArr = arr.map((el)) =>{
//     return el + el
// }
// console.log(newArr)

// let str = 'Hello'
// let arr = str.split((''))
// console.log(arr)

// let str = 'Hello'
// let arr = str.split('')
// let newArr = arr.map((el,idx) =>{
//     return idx
// })
// console.log(newArr)

// task 1  Напишите функцию, которая принимает массив чисел, строк и булеан если тип булеан сделайте противоположное значение.

// принимаем let arr = [1,2,3,4,”string”, “hello”, true, false] 

// получаем let newArr = [1,2,3,4,”string”, “hello”, false, true]

// task 2

// Напишите функцию, которая принимает строку и повторяем каждый ее символ 2 раза.

//     Пример входных данных: "test"

//     Результат: "tteesstt"

// task 3

// Напишите функцию, которая принимает строку и выводит индекс каждого символа

// task 4

// Напишите функцию которая принимает массив с четными и нечетными числами

// и возвращает вместо четных “четное” вместо нечетных “нечетное”

// task 5

// Напишите функцию которая принимает строку “головоломка” и заменяет все буквы “o” на  “a”

// task 6

// Напишите функцию которая принимает строку “           hello world.        ” и удаляет отступы по краям

// task 7

// напишите функцию которая принимает массив [1,2,3,4,5,6,7,8] и выводит “четное” 

//если число четное “нечетное” если число нечетное. Используйте тернарное выражение

// task-8

//  Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль первую букву каждого слова строки в верхний регистр.

// task-8

//  Вам дана переменная str = 'Максимально Ужасно, переделывай'.

//     Выведите в консоль все слова этой строки, используя метод split. Пример: [ 'Максимально' 'ужасно', 'переделывай'. ]


//task 4

// Напишите функцию которая принимает массив с четными и нечетными числами

// и возвращает вместо четных “четное” вместо нечетных “нечетное”

// let arr = [1,2,3,4,5,6]
// let newArr = arr.map ((el) =>{
//     if(el % 2 ==0)
//     return ""
// })
// console.log(arr)

// let arr = [1,2,3,4,5,6]
// let newArr = arr.map ((el) =>{
//     if(el % 2 ==0){
//     return "четное"
// }
// else {
//     return "нечетное"
// }
// })
// console.log(newArr)


// task 5

// Напишите функцию которая принимает строку “головоломка” и заменяет все буквы “o” на  “a”

// let str = "головоломка"
// let newStr = str.replaceAll("о","а")
// console.log(newStr)


//foreach  метод перебора массива. Он ничего не возращает.

// let arr = [1,2,3,4,5]

// let newArr = arr.forEach((el) => {
//     if(el == 3){
//         console.log("a")
//     }else{
//         console.log(el)
//     }
// })

// let arr = [1,3,2,5,6, "hello"]

// let newArr = arr.forEach((el) => {
//     if (typeof el === "string"){
//         console.log(true)
//     }else{
//         console.log(el)
//     }
// })

//3 filter. Перебирает массивю. Ворврашает новый массив с нужным количество данных.

// let arr = [1,2,3,4,5]
// let newArr = arr.filter((el,idx,a) => {
//     return el % 2 === 0
// })

// console.log(newArr)

// 4. find Перебирает массив. Возвращает первый элемент который подходит по условию. Возврашает тот тип данных который у элемента.

// let arr = [1,3,5,4]
// let newArr = arr.find ((el) => {
//     return el % 2 === 0
// })
// console.log(newArr)

// Math.min() из нескольких чисел выводит самое минимальное.min
// Math.max () из нескольких чисел выводит самое максимальное

// let a = Math.max(1,2,3,4)

// console.log(a)

// let a = Math.min(1,2,3,4)

// console.log(a)

// function name () {
//     return 1 + 2
// }

// console.log(name())

// function removeEveryOther(arr){
//     return arr.filter(function(elem, index) {
//       return index % 2 === 0;
//     });
//   }


//5 Readuce. Метод который перебирает массив и возвращает нужный тип данных.
let arr = [1, -4, 7, 12]

let newArr = arr.filter((el) => {
    return el > 0
})

let sum = newArr.reduce((acc,rec) => {
    return acc = rec
})


let name = "vanya"

let str = "mahabat"

// git init
// git add .
// git commit -m "название кратко"
// git push
