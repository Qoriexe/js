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




// let input = prompt ("enter your name:")
// let age = confirm("are you an adult?")

// if (age === true){
//     alert(`${input}, your age must be more than 18`)
// } else {
//     alert(`${input} you need to be 18`)
// }

alert ("დავალება 1.1");

let counter = 0
counter ++
alert(counter)
console.log(counter);

alert ("დავალება 1.2");

let num = 5;
alert (num);

num = 10
alert (num);
console.log(num);

alert ("დავალება 1.3");

let bb = 10 + 20 + 30
console.log(bb);
alert (bb)

alert ("დავალება 1.4");

let a = 100;
let b = 40;

let c = 60;
let d = 20;

let ab = 100 - 40;
let cd = 60 + 20;

let result = 80;
alert(result);
console.log(result);

alert ("დავალება 1.5");

let change = result % 9;
alert (change)
console.log(change);














 