/*write a function that removes duplicate from an array*/
/*write a function that takes in a number and returns the first 4 multiple */
/*write a function that takes a temp in f and coverts it to c*/
/*function filter(arr) {

   let result = []
   const even = arr.filter(number => {
      if (number % 2 === 0) {
         return number % 2 === 0;
      }
   });
   const odd = arr.filter(number => {
      return number % 3 === 0;
   })


   result.push(even, odd)

   return result;

}
console.log(filter([1, 2, 3, 4, 5, 6, 13, 12.4, 13.0, 15, 18, 20, 22, 60.17, 19, 31, 33]))



function even_or_odd(number) {
   if (number % 2) {
      console.log("Even");
   } else {
      console.log("Odd")
   }
}
even_or_odd(4)

 
 
    function remove(arr) {
        return arr.filter((val,
            index) => arr.indexOf(val) === index);
}
    
let arrA = [1,4,6,8,1,4,6,8];
 
console.log(remove(arrA));



function lovefunc(flower1, flower2){
  if(flower1 % 2 === 0 && flower2 % 2 == 0){
    return false;
  }else return true
}
console.log(lovefunc(10, 10))




function multiples(num) {
   let multiples = [] 
   let defaultVal = num * 4
   for (let i = num; i <= defaultVal; i = i + num){
      multiples.push(i)
   }  
   return multiples;
}

const fourMultiples = (num, limit) => {
   let result = [];

   for (let i = 1; i <= limit; i++){
      result.push(num * i);
   }
   return result.splice(0, limit)
}

console.log(fourMultiples(8, 16))

 console.log(multiples(5, 20))



function convert(fahrenheit) {
   let fahrenheitTemp = fahrenheit;
   let answer = (fahrenheitTemp - 32) * 5 / 9 ;
   console.log(answer);
}

const btn = document.getElementById("btn");

function showKachi() {

   const name = ["kachi", "chidera", "jason", "amadi"]
   const age = [24, 35, 78, 100]
   
   const userName = name[Math.floor(Math.random() * name.length)]

   const userAge = age[Math.floor(Math.random() * age.length)]
   
   const result = document.querySelector(".result");

   const newDiv = `<div> Name: ${userName}</div>
                     <p> Age: ${userAge} </p>
                     <div> Class: Primary 5 </div>
                     <br/>
                                 `

   result.innerHTML += newDiv;
}

btn.addEventListener("click", showKachi)

*/
/*
var getItems = document.querySelector('.head')
getItems.style.color = "red"
getItems.style.backgroundColor = "blue"
getItems.style.borderRadius = "20px"
var form = document.querySelector('.input')
form.value = ""
if (form.value > 2) {
    alert('Welcome')
} else {
   alert('Input a name')
 }*/
function calculator(num1, num2) {
   let result = []
   if (num1 >= 0) {
      console.log(('The result is ' + (num1 + num2)))
   }
    else if (num1 <= 0){
    result.push(num1 + num2)
   }
   else {
   document.write('Cannot be added')
   }
   return result;
}

console.log((calculator(60, 50)))