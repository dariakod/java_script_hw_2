let number = +prompt('Enter the number')

if (number > 0){
    console.log("Куб числа:", number * number * number);
}
else {
    console.log("Квадрат числа:", number * number);
}



let students = prompt("Введите количество учеников в классе")
let chairs = prompt("Введите количество стульев в кабинете")

if (students <= chairs) {
    console.log("Стульев хватает.");
} else {
    console.log("Стульев не хватает.");
}




let users = ['John', 'Bob', 'Tom', 'Nick', 'Sam', 'Alex', 'Jack'];

// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);
// console.log(users[3]);
// console.log(users[4]);
// console.log(users[5]);
// console.log(users[6]);

// Вывести в консоль предпоследний элемент массива

 if (users.length >= 2){
    console.log(users[users.length - 2]);
}
else {
    //console.log(users);
}

// Удалить первый элемент массива

users.shift();
console.log(users);


// Добавить в конец массива новый элемент 'Landon'

users.push('Landon');
console.log(users);


// Заменить четвертый элемент массива на 'Den'

users[4] = 'Den';
console.log(users);

// Удалить последний элемент массива

users.pop();
console.log(users);