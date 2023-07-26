// 1)<<<------------- How to print something using Js ------------------------->>>>
// console.log('Hello World');//to print anything on console
// alert('Hi there');// to show an alert
// document.write(' This is document write');// to write something on browser but we should avoid this for some reason

// 2)<--------------------------Console API(Application programming interface)------------------------------------------->>
// console.log('Hello World',4+6,"HI");//to print anything on console
// console.warn('this is a warning in console')// to show a warning in console not in browser
// console.error('to show error in console not in browser')
// console.clear()//to clear console
// console.assert(4==6)// it will check the condition and return accordingly for ex here O/P is index.html:46  Assertion failed: console.assert
// console.assert(4==(6-2))// it's correct so no Output assertion is used to check if it's equal or not
//
//3)<------------------------------JavaScript Variables------------------------>
// what are variables?--> container to store data values
// single line comment shortcut -> ctrl+/
// multi line comment --?/* comment */
// to edit multiple things one time click alt+click then edit
var Number1 = 56;
var Number2 = 60;
// console.log( Number1+Number2);
/*4)--------------------------- DATA TYPES IN JAVASCRIPT-------------------------*/

//Numbers
var num1 = 90;
var num2 = 90.9777; //float
// console.log(num1,num2);

//String
var str1 = 'This is string in single quote'
var str2 = "This is string in double quote"
// console.log(str1,str2)

// Object **
var marks = {
    Harsh: 88,
    Bharati: 98,
    Abhimanyu: 100
}// it takes value in key value pair

// console.log(marks)

//Booleans

// var a= true;
// var b= false;
// console.log(a,b);

//Undefined
// var und= undefined;
// console.log(und)

// var c;
// console.log(c)//it will print undefined since hmne eski value define nai ki h

//NULL
// var n=null;
// console.log(n) //it will print null qki hmne esme kaha h ki kuch mat rakho eski value nothing so ye main diff h undefined or null me

//array (collection of elements it can either be string num etc.)
// var arr=[1,2,3,4,5]
// console.log(arr)//O/P- [1,2,3,4,5]
// console.log(arr[0])// O/P- 1


/* at a very high level there are two types of data type in JavaScript
1) primitive data type: Undefined, null, number, boolean, symbol, string.
2) reference data type: Arrays and Objects
*/

/*5)----------------------------Operators in JS----------------------*/
//Arithmatic Operator
// var a =100;
// var b = 10;
// console.log('The value of a+b is',a+b)
// console.log('The value of a-b is' ,a-b)
// console.log('The value of a*b is'  ,a*b)
// console.log('The value of a/b is' ,a/b)

//Assignment Operator
// var c=b;
// console.log(c)//O/P=10
// c+=2//c=c+2
// c-=2//c=c-2
// c*=2//c=c*2
// c/=2//c=c/2

//Comparison Operator
// var x=34;
// var y=56;
// console.log(x==y);//false
// console.log(x<=y);//true
// console.log(x!=y);//true
// console.log(x>=y);//false
// console.log(x>y);//false
// console.log(x<y);//true

//Logical Operator
// //Logical AND
// console.log(true && true)// true
// console.log(true && false)//false
// console.log(false && true) //false
// console.log(false && false)//false

// //Logical OR
// console.log(true ||  true)// true
// console.log(true || false)//true
// console.log(false || true) //true
// console.log(false ||  false)//false

// //Logical NOR
// console.log(!true)//false
// console.log(!false)//true

//Operator is +,-,*,/ etc and Operands is jispar hm ye operations kar rahe h



/*------------------------------Functions in JS-----------------*/
//functions are dry it means we don't need to write same function again and again
//in chrome if you see anything in blue colour it means it is a number and in black it's a string

function avg(a, b) {
    return (a + b) / 2
}

c1 = avg(14, 6)
c2 = avg(5, 8)
// console.log(c1,c2)

/*------------------------Conditional Operator---------------------*/
// if else conditions

/*
var age=4;
if (age>8){
    console.log('You are not a kid');
}
else{
    console.log('You are a kid');
}


// if-else ladder
var age =60
if (age>82){
    console.log('You are not a kid');
}
else if(age>26){
    console.log('You are a kid');
}
else if(age >6){
    console.log('you are a child')
}
else{
    console.log('fuck off')
}
*/

//------------------------FOR LOOP-------------------------//
/*
var arr=[1,2,3,4,5,6,7]
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}
/*<--------------------Foreach function in JS--------------------->*/
/*
arr.forEach(element => {
    console.log(element)
});
*/

/*---------------while loop-----------------*/

/*
let j = 0 // the main difference of let and var is let ka use ek block ke andar he rahta h 
//for example wo curly braces ke andar define kiya to uske bahar js usko nai pahchanega but var har jagah rahta h
const k = 1 // we use const when we don't want to override any value
k += 1 //it will not work because k is constant
var arr=[1,2,3,4,5,6,7]
while(j<arr.length){
    console.log(arr[j]);
    j++;
}
*/
//------------------ do while (it will run atleast one time without checking cond because we write do at first)------>
/*
var arr=[1,2,3,4,5,6,7]
let j = 0 
do{
    console.log(arr[j]);
    j++;
}while(j<arr.length)
*/

//-----------------------------continue and break------------------------------------->

// continue means es itteration ko choro agle itteration me chale jao
// and break ka matlab hota h looping karna chor do
/*
var arr=[1,2,3,4,5,6,7]
for(var i=0;i<arr.length;i++){
    if(i==2){
        // break; //O/P - 1,2
        continue;//O/P - 1,2,4,5,6,7
        
    }
    console.log(arr[i])
}
*/

/*-----------------------------------------Array methods--------------------------------*/
let myArr = [34, 'Bharati', 'food', null, true]
// myArr.pop()// it will pop the last element of the array
// myArr.length()//return length of the array
// myArr.push('Harry')//it will add harry at the last of the array
// myArr.shift()//it will remove the 1st element of the array
// myArr.unshift('food')//it will add food in the 1st place 0th position and if we print it at first it will write the length of array
// myArr.sort()//first it will consider array to string values then sort accordingly
// myArr.toString()//converts array to a single string
// console.log(myArr)

/*------------------------------------String Methods----------------------------------*/
// let myString= 'Bharati is a good girl good good';
// console.log(myString.length);//return the length of the string
// console.log(myString.indexOf('good'));//return the first index of good
// console.log(myString.lastIndexOf('good'));//return the last index of good
// console.log(myString.slice(1,3))//print 1st index to 3-1 index
// d=myString.replace('Bharati','harsh');//replace first occurance of bharati with harsh
// console.log(d,myString)


/*----------------------------------------date time function-----------------------*/

/*
let myDate= new Date(); //new date is used to make new date
console.log(myDate)//O/p- Tue Jul 25 2023 21:25:23 GMT+0530 (India Standard Time)
console.log(myDate.getTime())//it will give time in seconds o/p- 1690300523686
console.log(myDate.getFullYear());//it will return the current year o/p- 2023
console.log(myDate.getDay()); //it will return the no of day in a week for ex tuesday is 2nd day of a week so 2 o/p- 2
console.log(myDate.getMinutes()); //it will return the current minute in an hour not the whole day minute o/p- 25
console.log(myDate.getHours()); //o/p - 21

*/


/*---------------------------------------DOM MANIPULATION----------------------------------*/

let elem = document.getElementById('click').click();// to click the click id /button
// console.log(elem)
let elemClass = document.getElementsByClassName('container')//we will get all the  info of that class
// console.log(elemClass);
// elemClass[0].style.background='yellow';//background colour will be yellow for the first element using class container

elemClass[0].classList.add('bg-primary');//to add a class in container class by DOM manipulation same way we can add many classes
elemClass[0].classList.add('text-success')//it will add text success to the 1st time container class is used not for all
// elemClass[0].classList.remove('text-success');// to remove text- success class
// console.log(elemClass[0].innerText);//for inner text
// console.log(elemClass[0].innerHTML);// for inner html
// tn=document.getElementsByTagName('button');
// console.log(tn);
/*
tn = document.getElementsByTagName('div');
console.log(tn)
createdElement = document.createElement('p');
createdElement.innerText = 'This is created text';
tn[0].appendChild(createdElement);// to create a child of an element 
createdElement2 = document.createElement('b');
createdElement2.innerText = 'This is replaced and created bold child 2';
tn[0].replaceChild(createdElement2, createdElement);// to replace
// removeChild(element); // to remove an element

console.log(document.location);//return the location like ip etc
console.log(document.title);//returb title of our page which is nothing but this page
console.log(document.URL);//return the URL of our web page for ex now it's local 
console.log(document.scripts);//return all the scripts in our Web page
console.log(document.domain);//return the domain for now it's localhost
console.log(document.images);//return all the images 
// ----selecting using query selector---------

sel = document.querySelector('.container')//it will return the first container class
console.log(sel);
sel = document.querySelectorAll('.container');// it will return all container class
console.log(sel);
*/

//-----------------------Events in JS-----------------------------------------//
//so what is Events--> Events mean anything happen we want to listen those things we say that it is an event
//for ex agar hm apna mouse ko kisi button ke upar hover kiye to wo ek event h button click kiye wo ek event h
//similarly hm apne web page me mouse ko le gaye wo v ek event h

function clicked(){
    console.log('The button is clicked');
}
/*
window.onload=function(){
    console.log('reload hua page');
}
firstcontainer.addEventListener('click',function(){
    document.querySelector('.container')[1].innerText='<b>clicked on container</b>'
    // console.log('clicked on container')
})
firstcontainer.addEventListener('mouseover',function(){
    console.log('Mouse on container')
})
firstcontainer.addEventListener('mouseout',function(){
    console.log('Mouse out of container')
}) 
prevHTML=document.querySelector('.container').innerHTML;
firstcontainer.addEventListener('mouseup',function(){
    document.querySelector('.container')[1].innerHTML=prevHTML;
    console.log('Mouse up when clicked on container')
})
firstcontainer.addEventListener('mousedown',function(){
    document.querySelector('.container')[1].innerHTML='<b>we have clicked</b>'
    console.log('Mouse down when clicked on container')
}) */

//--------------------------Arrow Functions------------------------------------//
//what is arrow function -> previously we define function like this function() but now we can directly
// write the function name and pass the parameters will show below

//Previously we write function like
/*
function summ(a,b){
    return a+b;
}
console.log(summ(34,5));
*/
//but with arrow function
/*
summ = (a,b) =>{
    return a+b;
}
console.log(summ(34,5));
*/


//---------------------------------------------set Timeout------------------------------------//
logkaro= ()=>{
    console.log('settimeout');
}
//setTimeout(logkaro,5000);//settimeout function 2 argument lega first argument ek function 2nd arg kitne mili second ke bad usko execute karna h
//setInterval(logkaro,5000);//settimeout function 2 argument lega first argument ek function 2nd arg kitne mili second ke bad usko repeat karna h