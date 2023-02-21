// Завдання 1

// let str= prompt("Напишіть щось");
// let res=0;
// for(let i=0; i<str.length;i++){
//     if(str.charAt(i)==" "){
//         res++
//     }
// }
// console.log(res);


// Завдання 2
// let str = prompt("Email")
// let res = 0;
// for (let i = 0; i < str.length; i++) {
//     if (str.charAt(i) == "@") {
//         if (str.charAt(0) == "@" || str.slice(-1) == '@') {
//             console.log("Неправильно");
//         } else {
//             console.log("Вітаю))");
//         }
//     } else if (str.charAt(i) != "@") {
//         res++;
//     }
//     if (res == str.length) {
//         console.log("Неправильно");
//     }
// }

// Завдання 3

// let str = prompt("Write your text");
// let count = 0;
// let newStr = str.split(' ');
// for (let i = 0;i<newStr.length; i++) {
//     if (newStr[i] == "html") {
//         count++
//     }
// }
// console.log(count);


// Завдання 4

let str = prompt("Write your text");
str = str.replace("http://", "");
str = str.replace("https://", "");
console.log(str);