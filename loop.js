//1. Виведіть в консоль числа від 1 до n використовуючи цикл for. (Дано: n = 10)
for( let i = 0;  i <=10; i++){
console.log(i)
};

//2. Напишіть цикл, який обчислює суму чисел від 1 до n. (Дано: n = 100)  
let suma = 0;
var n= 100;
for( let i= 0;  i< n+1; i++){
 suma+= i;
}
console.log(suma)

//3.Використовуючи цикл while, виведіть в консоль числа від n до 1. (Дано: n = 10)
let n= 10
while( n >=1 ){
    console.log(n)
     n--;
};

//4.Напишіть цикл, який виводить всі парні числа від 1 до n. (Дано: n = 50)
for (let i= 0; i <= 50; i++){
  if( i % 2 === 0){
      console.log(i)
  }
};

//5.Виведіть в консоль таблицю множення від 1 до n використовуючи вкладені цикли. (Дано: n = 10)
let  n= 10
for( let i= 1; i< n; i++){
   console.log(i*n)
};

//6.Обчисліть факторіал числа n, використовуючи цикл. (Дано: n = 7)
var a = 7
var sum= 1
for( let i= 1; i<= a; i++){
 sum*=i
};

//7.Виведіть перші n чисел послідовності Фібоначчі. (Дано: n = 10)



//8.Виведіть всі прості числа від 1 до n. (Дано: n = 100)



//9.Створіть масив чисел від 1 до n, а потім виведіть тільки ті числа, що діляться на 5 без остачі. (Дано: n = 100)
var aray = []
for( let i = 0;  i< 100; i++){
 if(i % 5 === 0) {
  aray.push(i)
 }
};

//10.Дано масив чисел. Обчисліть суму чисел в цьому масиві. (Дано: масив = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var sum= 0;
for (let i = 0; i < array.length; i++){
 sum += array[i]
    };
console.log(sum)

// кожна задача 10 балів, для зарахування ДЗ треба набрати 70 балів. 

// У парах де ви працювали, створюєте репозиторій ПУБЛІЧНИЙ, називаєте його вашеімʼя-js-aqa-course
// Створюєте бранчу з назвою цієї практичної
// Виконуєте задачі й робите пул ріквест

// Формат здачі:
// Посилання на ваш пул ріквест, й там має бути апрув від вашого напарника з коментом.