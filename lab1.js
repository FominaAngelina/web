console.log("Задача №1");

let speedKm = prompt( "Сколько км/ч?", 0);
let speedM = prompt( "Сколько м/c?", 0);

console.log(`${speedKm} км/ч соответствует ${speedKm*1000/3600} м/c.`);
console.log(`${speedM} м/с соответствует ${speedM*3600/1000} км/ч.`);

////////////////////////////////////////////////////////////////////////

console.log("\nЗадача №2");

let a = +prompt( "Первая сторона треугольника", 0);
let b = +prompt( "Вторая сторона треугольника", 0);
let c = +prompt( "Третья сторона треугольника", 0);

if (a + b > c && a + c > b && b + c > a){
    let p = (a + b + c) / 2;
    console.log("Треугольник существует.");
    console.log(`Периметр = ${a +b + c}`);
    console.log(`Площадь = ${Math.sqrt(p*(p-a)*(p-b)*(p-c))}`);
    console.log(`Соотношение = ${(a +b + c)/Math.sqrt(p*(p-a)*(p-b)*(p-c))}`);
}
else{
    console.log("Треугольника не существует.");
}

////////////////////////////////////////////////////////////////////////

console.log("\nЗадача №3");

let leng = +prompt( "Введите длину цикла",0);

if (!(isNaN(leng)) && leng >= 0){
    for (let i = 0; i < leng; i++)
    {
        if(i % 5 === 0){
            console.log(`${i} fizz buzz`);
        }
        else if( i % 2 === 0){
            console.log(`${i} buzz`);
        }
        else{
            console.log(`${i} fizz`);
        }
    }
}
else{
    console.log("Надо было ввести положительное число.");
}

/////////////////////////////////////////////////////////////////////////

console.log("Задача №4");

let elka = ">";

for (let i = 0; i < 14; i++)
{
if (i === 13) elka += "||";
else if ( i % 2 === 0) {
for (let g = 0; g < i; g++) elka += "#";
elka += "\n";
}
else if ( i % 2 === 1) {
for (let g = 0; g < i; g++) elka += "*";
elka += "\n";
}
}

console.log(elka);

///////////////////////////////////////////////////////////////////////

console.log("\nЗадача №5");

let numrand = Math.floor(Math.random()*10);

while (true){
let number = +prompt("Введите число для сравнения");
if ( number === numrand) {
console.log("Угадали!");
break;
}
else if ( number > numrand) {
console.log("Ваше число больше!");
}
else if ( number < numrand) {
console.log("Ваше число меньше!");
}
}

//////////////////////////////////////////////////////////////////////////

console.log("\nЗадача №6");

let n = +prompt("Введите число n");
while (isNaN(n) || n < 1){
n = +prompt("Введите n положительным числом");
}
let x = +prompt("Введите число x");
while (isNaN(x) || x < 1){
x = +prompt("Введите x положительным числом");
}
let y = +prompt("Введите число y");
while (isNaN(y) || y < 1){
y = +prompt("Введите y положительным числом");
}

if (n % x == 0 && n && n % y == 0)
console.log(`n = ${n}, x = ${x}, y = ${y} => true`);
else console.log(`n = ${n}, x = ${x}, y = ${y} => false`);

/////////////////////////////////////////////////////////////////////////

console.log("\nЗадача №7");

let month = +prompt("Введите номер месяца");
while (isNaN(month) || month < 1 || month > 12) {
month = +prompt('Введите номер месяца от 1 до 12.');
}

if (month < 4) console.log(` Месяц ${month} => 1 квартал`);
else if (month < 7) console.log(` Месяц ${month} => 2 квартал`);
else if (month < 10) console.log(` Месяц ${month} => 3 квартал`);
else console.log(` Месяц ${month} => 4 квартал`);