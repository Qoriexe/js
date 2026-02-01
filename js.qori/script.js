// 1) ცვლადი, მათი ტიპები

// const, let, var.
// const - მუდმივი ცვლადი რომლის მნიშვნელობის შეცვლა არ შეიძლება
// let და var ცვლადის ტიპები რომლებზეც მომავალში შემიძლია გადავაწერო სხვა მნიშვნელობები

//  const newVar = 10;
//  let number = 150;
//  var text = "I am text";

//  console.log(number)
 

//  ---------------------------------------------------------

// 2) კონსოლის ტიპები

// console.log(number);
// console.warn(check);
// console.error(error);

// -------------------------------------------------------------------

// 3) ცვლადში შენახული ინფორმაციის ტიპები

//  char/string/number/boolean/undefinded/NaN/null/array/object/function


// ცვლადში შენახული ინფორმაციის ტიპის გადამოწმების საშუალება:
// typeof(variable) or typeof variable

// char symbols : A, B, 6, * ...
// let chars = 'a';
// console.log(chars);

// string ტექსტური ტიპი: "text", '', ``
// let text1 = "60";
// console.log(text1, typeof(text1));
// console.log(typeof (text1));

// number: 1, 3, 1.5
// let number = 60
// console.log(number, typeof(number));
// console.log(typeof(number));

// boolean: true, false
// let truefalse = true
// console.log(truefalse);

// undefined მნიშვნელობის გარეშე
// let un
// console.log(un);

// NaN (not a number) შედეგი არ არის რიცხვი
// let calc = "text1" * 10;
// console.log(calc);

// ხელოვნურად მინიჭებული ნული null
// let n = null;
// console.log(n);

// მასივი: [1, 3, 4, 5] 
// let myarray = [1, 3, 4, 5]
// console.log(myarray);

// ობიექტი: { name: nika, age: 28 }
// let myobject = {
//     name: "andria",
//     age: 18
// }
// console.log(myobject);

//------------------------------------------------------------

// 4) მათემატიკური მოქმედებები
// +, -, /, *, %, ++, --

// let sum = 20 + 10
// console.log(sum);

// let x = 100 - 20
// console.log(x);

// let devide = 20 / 5
// console.log(devide);

// let mult = 4 * 30;
// console.log(mult);

// let y = 21 % 5;
// console.log(y);

// ++ არის incrament
// let inc = 10
// console.log(inc);
// inc ++;
// console.log(inc);

// -- არის decrament
// let dec = 20;
// console.log(dec);
// dec--;
// console.log(dec);

// +, -, *, / შემიძლია ჩავწერო მოკლეთაც
// let sum = 10;
// console.log(sum);

// sum = sum + 30;
// sum += 30;
// console.log(sum);

// იგივე იქნება სხვა მოქმედებებისთვისაც

//------------------------------------------------------------

// NaN მაგალითები

// let mult = "text" * 10;
// console.log(mult);

// let dev = 100 / "3cfsx0";
// console.log(dev);

// let connect = "text" + true + NaN;
// console.log(connect);

//---------------------------------------------------------

// 5) შედარების ოპერატორები:
// ==, ===, >=, <=, >, <

// == მსუბუქი შედარება(ადარებს მხოლოდ მნიშვნელობებს)
// console.log(20 == "20");

// === მკაცრი შედარება(ადარებს როგორც მნიშვნელობას ასევე ტიპს)
// console.log(20 === "20");
// console.log(30 === 30);
// console.log("40" === "40");

// console.log(30 >= 40);

//----------------------------------------------------------

// 5) დიალოგური ფანჯრები: prompt(), confirm(), alert();

// prompt() - მომხმარებელს შემოვაყვანინოთ ინფორმაცია
// let input = prompt ("please enter your age:")
// console.log(input, typeof(input));


// confirm() დაეთანხმე ან უარყავი
// let input = confirm ("are you adult?")
// console.log(input, typeof(input));

// alert() საინფორმაციო ფანჯარა
// alert("you must be an adult!")




let Task = ("დავალება 5.4")
console.log(Task);

let bigNum = 98;
let isBig;

if (bigNum > 100) {
    isBig = true;
} else {
    isBig = false;
}
console.log(isBig);
// ------------------------------------------------
let Task2 = ("დავალება 5.5")
console.log(Task2);

let num = 55;
let notBetween;

if (num < 10){
    notBetween = true;
} else if (num > 50){
    notBetween = true;
} else {
    notBetween = false;
}
console.log(notBetween);
// ------------------------------------------------------

let Task3 = ("დავალება 5.6")
console.log(Task3);
alert ("task 5.6")
let gender = "female"

if (gender === "female"){
    alert  ("მდედრობითი სქესი");
} else if (gender === "male"){
    alert ("მამრობითი სქესი");
} else {
    alert ("გაურკვეველი სქესი");
}
console.log(gender);
// ------------------------------------------------
let Task4 = ("დავალება 5.7")
console.log(Task4);
alert ("task 5.7")

let animal = "სპილო"

if (animal === "სპილო"){
    alert ("ეს ცხოველი სპილოა");
} else {
    alert ("ეს ცხოველი სპილო არაა")
}
console.log(animal);
// --------------------------------------------------
let Task5 = ("დავალება 5.8")
console.log(Task5);
alert ("task 5.8")

let num1 = 99; 
let num2 = 19; 

if (num1 > num2){
    alert ("num1 მეტია num2-ზე")
} else if (num1 < num2){
    alert ("num1 ნაკლებია num2-ზე");
} else {
    alert ("num1 ტოლია num2-ზე");
}

console.log("num1 > num2");
// ----------------------------------------------------
let Task6 = ("დავალება 5.9")
console.log(Task6);
alert ("task 5.9")

let month = 6;

if ((month > 0 && month < 3) || month === 12) {
    alert("ზამთარია");
} else if ((month >= 3 && month <= 5)){
    alert("გაზაფხულია")
} else if ((month >= 6 && month <= 8)){
    alert("ზაფხულია")
} else if((month >=9 && month <= 11)){
    alert ("შემოდგომაა")
} else {
    alert ("არასწორი თვე")
}
console.log("ზაფხული");
// -----------------------------------------------------
let Task7 = ("დავალება 5.10")
console.log(Task7);

let season = "winter";

switch (season) {
    case "winter":
        console.log("ზამთარია");
        break;
    case "spring":
        console.log("გაზაფხულია");
        break;
    case "summer":
        console.log("ზაფხულია");
        break;
    case "autumn":
        console.log("შემოდგომაა");
        break;
    default:
        console.log("წლის პერიოდი არაა განსაზღვრული");
}
// ---------------------------------------------
let Task8 = ("დავალება 5.11")
console.log(Task8);

let clock = 23;
let dayPeriod;

if (clock >= 0 && clock < 12){
    dayPeriod = 'AM'
} else {
    dayPeriod = 'pm'
}
console.log(dayPeriod);
// --------------------------------------------
let Task9 = ("დავალება 5.12")
console.log(Task9);

dayPeriod = (clock >= 0 && clock < 12) ? "AM" : "PM";

console.log(dayPeriod);
// -------------------------------------------
let Task10 = ("დავალება 5.13")
console.log(Task10);
alert ("task 5.13");

let string = "hello im string";

if (string.length > 100){
    alert("ტექსტის სიგრძე აჭარბებს დაშვებულ ნორმას");
} else {
    alert("ტექსტის სიგრძე დაშვებული ნორმის ფარგლებშია");
}
console.log(string);
// ------------------------------------------------


 