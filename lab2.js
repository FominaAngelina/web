console.log("Задача №1");

function convertSpeed(speed, trand){
    let korv
if(trand === 'toKMH') korv = speed*3600/1000;
else korv = speed*1000/3600;
return korv;
}

let speed = +prompt("Введите скорость для конвертации");

while (isNaN(speed) || speed < 0){
speed = +prompt("Введите положительную скорость");
}

let trand = prompt("Введите конвертацию в м/с 'toMS' или в км/ч 'toKMH");

while (true) {
    if(trand === "toMS" || trand === "toKMH") break;
    trand = prompt("Введите конвертацию в м/с 'toMS' или в км/ч 'toKMH'");
}

let konv = convertSpeed(speed, trand);

console.log(`convertSpeed(${speed}, '${trand}') -> '${konv}`);

//////////////////////////////////////////////////////////////////////////////////////

console.log("\nЗадача №2");

function absValue(number){
if(number > 0 || number === 0) return number;
else return number*(-1);
}

let number = +prompt("Введите число");

while (isNaN(number)){
number = +prompt("Введите число");
}

console.log(`absValue(${number}) -> ${absValue(number)}`);

//////////////////////////////////////////////////////////////////////////////////////

console.log("\nЗадача №3");

let student = {
group: 326,
surname: "Фомина",
name: "Ангелина"
};

console.log(`Список свойств: ${Object.keys(student)}`);

console.log(`Cтудент ${student.name} ${student.surname} учится в ${student.group} группе`);

//////////////////////////////////////////////////////////////////////////////////////

console.log("\nЗадача №4");

function randomNumder(min, max) {
    if(min >= 0){
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        return num;
    }
    else if (min < 0 && max >= 0){
        const num = Math.floor(Math.random() * (max + min + 1));
        return num;
    }
    else{
        const num = Math.floor(Math.random() * ((-max + min)*(-1) + 1)) + min;
        return num;
    }
}

let min = +prompt("Введите минимальное число.");
let max = +prompt("Введите максимальное число");

console.log(`randomNumber (${min}, ${max}) -> ${randomNumder(min, max)}`);

//////////////////////////////////////////////////////////////////////////////////////

console.log("\nЗадача №5");

const sampleArray = [58, 2, 5,54,3,8,1,7,89,2,7,9,44,56,4,58,44];
let leng = sampleArray.length;

let kolvo = +prompt("Введите длину нового массива");
const newMas = [];

for (let i = 0; i < kolvo; i++) newMas.push(sampleArray[randomNumder(0, leng)]);

console.log(`sampleArray([${sampleArray}], ${kolvo}) -> [${newMas}]`);