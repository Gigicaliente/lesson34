//task1

let fruits = ["Яблоко", "Банан", "Апельсин"]
console.log(fruits)

//task2

console.log(fruits[0]);
console.log(fruits[2]);

fruits.push("Груша")
console.log(fruits)


//task3

let last = fruits.pop();
let first = fruits.shift();
console.log(fruits);


//task4

fruits.forEach(fruits => console.log(fruits));

//task5

let lenths = fruits.map(fruit => {
    return fruit.length
})
console.log(lenths)

//task6

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let even = numbers.filter(number => number%2 === 0);
console.log(even)

//task7

let reduced = numbers.reduce((acc, number)=> acc + number, 0)
console.log(reduced)

//task8
let finded = numbers.find(number => {
    return number > 5;
})
console.log(finded)

//task9

let array1 = [1,2,3];
let array2 = [4,5,6];
let concated = array1.concat(array2)
console.log(concated);


//task10

let hasFruits = fruits.includes("Банан");
console.log(hasFruits);


//task11
console.log(fruits.reverse())
