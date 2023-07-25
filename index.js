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
        var Number1= 56;
        var Number2= 60;
        // console.log( Number1+Number2);
        /*4)--------------------------- DATA TYPES IN JAVASCRIPT-------------------------*/

        //Numbers
        var num1= 90;
        var num2=90.9777; //float
        // console.log(num1,num2);

        //String
        var str1= 'This is string in single quote'
        var str2= "This is string in double quote"
        // console.log(str1,str2)

        // Object **
        var marks={
            Harsh: 88,
            Bharati:98,
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
        
        function avg(a,b){
            return (a+b)/2
        }

        c1=avg(14,6)
        c2=avg(5,8)
        // console.log(c1,c2)

        /*------------------------Conditional Operator---------------------*/
        // if else conditions


        // var age=4;
        // if (age>8){
        //     console.log('You are not a kid');
        // }
        // else{
        //     console.log('You are a kid');
        // }


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






