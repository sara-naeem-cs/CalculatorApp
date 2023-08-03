document.addEventListener('DOMContentLoaded', () => {
    //Variables:
    var firstNum = '';
    var secondNum = '';
    var operator = null;
    var calculatorValue_span = document.getElementById("calculator-value"); //selecting calc screen
    //const allNumberBtns = Array.from(document.querySelectorAll('button')); //selects all num buttons
    const allNumberBtns = Array.from(document.getElementsByClassName('number')); //selects all num buttons
    const allOperatorBtns = Array.from(document.getElementsByClassName('operator')); //selects all num buttons
    const clearBtn = document.getElementById("clear");
    const equalsBtn = document.getElementById("equals");


    //Button Events
    allNumberBtns.map(button => {
        button.addEventListener('click', (e) => { //for each button, we check for a click
            //calculatorValue_span.innerHTML = calculatorValue_span.innerHTML + e.target.innerHTML;

            if (firstNum == "" && operator == null){
                //firstNum = calculatorValue_span.innerHTML;
                firstNum = firstNum+e.target.innerHTML;
                calculatorValue_span.innerHTML = calculatorValue_span.innerHTML + e.target.innerHTML;
            }else{
                //secondNum = calculatorValue_span.innerHTML;
                secondNum=secondNum+e.target.innerHTML;
                calculatorValue_span.innerHTML = calculatorValue_span.innerHTML + e.target.innerHTML;
            }


            
        });
    });


    allOperatorBtns.map(button => {
        button.addEventListener('click', (e) => { //for each button, we check for a click
            //set num1 to answer, set num2 to empty
            if (firstNum == ''){
                //We cannot do anything
                //Display an alert and do nothing
                alert("Can't use an operator without specifying a number first!");

                //firstNum = calculatorValue_span.innerHTML;
            }else if(firstNum!="" && secondNum != "" && operator !=null){
                //We already had an operation before hand ex. 1+1+
                //So we take the result of the previous operation set as first num, set second num to "", set operator to new operator
                
                let n1 = parseInt(firstNum);
                let n2 = parseInt(secondNum);
                console.log(n1 + " " + n2 + " " + operator);
                firstNum = operate(n1, n2, operator);
                secondNum = "";
                operator = e.target.innerHTML;
                
            }else{
                //we set the operator until we get the second number 
                operator = e.target.innerHTML;
            }
            calculatorValue_span.innerHTML = firstNum + operator+secondNum;

        });
    });
    
    //clear button functionality
    clearBtn.addEventListener('click', () => {
        firstNum = '';
        secondNum = '';
        operator = null;
        calculatorValue_span.innerHTML = '';
    });


    //equals button functionality
    equalsBtn.addEventListener('click', () => {
        if (firstNum == ""){
            alert("You're so silly, you didn't even choose a number! 😚");
            //Send alert stating that the first number hasn't been chosen
        }else if(secondNum == "" && operator == null ){
            //return the first number:
            calculatorValue_span.innerHTML = firstNum;

        }else if(firstNum != "" && operator != null && secondNum == ""){
            //first num and operator but no second num
            alert("Operations need a second number 😘!");

        }else if(secondNum == "0" && operator == "/"){
            alert("Buddy that like totally goes against the rules of math!");

        }else{
            //We have firstNum, secondNum and an operator, so we operate!
            let n1 = parseInt(firstNum);
            let n2 = parseInt(secondNum);
            //operate
            calculatorValue_span.innerHTML = operate(n1, n2, operator);
            firstNum =  calculatorValue_span.innerHTML;
            secondNum = "";
            operator = null;
        }
        //7+8-2 gives error

    });


    function add(num1, num2){
        return num1 + num2;
    }
    function subtract(num1, num2){
        return num1 - num2;
    }
    function multiply(num1, num2){
        return num1 * num2;
    }
    function divide(num1, num2){
        return num1 / num2;
    }

    function operate(curr_num1, curr_num2, curr_operater){
        if (curr_operater == "+"){
            return add(curr_num1, curr_num2)
        }
        else if (curr_operater == "-"){
            return subtract(curr_num1, curr_num2)
        }
        if (curr_operater == "*"){
            return multiply(curr_num1, curr_num2)
        }
        if (curr_operater == "/"){
            return divide(curr_num1, curr_num2)
        }
    }

    
   






    function main(){

    }
    main();


})

//Use console.log to test functions (functions can't be 
//called from console)



//Js uses else if, python uses elif