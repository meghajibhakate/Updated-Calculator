
// globle variables-------------------------------------------------------------
var operatorSelected = '';
var number1 = '';
var number2 = '';
var operatorClicked = false;





//get numbers -------------------------------------------------------
function number(num) {
    if (operatorClicked == false) {
        number1 = number1 + num;
        console.log('number1: ', number1)

        operator_enable(Operator);          //  operator ko enable ke liye calling kiya ---

    } else {
        number2 = number2 + num;
        equal_enable()
        console.log('number2: ', number2)
    }

    var output = document.getElementById("input");
    output.value += num;

}

// get operator -------------------------------------------------------------------------------
function operators(n) {
    console.log("opr" + n)
    operatorClicked = true;
    operatorSelected = n;
    var output = document.getElementById("input");
    output.value += n;
    operatordisable(Operator);

}

// // delete number one by one ------------------------------------------------------------
function deletebutton() {

    var inputField = document.getElementById("input");
    let value = inputField.value;
    value = value.slice(0, -1);
    inputField.value = value;

    if (operatorClicked == false) {
        number1 = value;
        console.log("n1 " + number1);

    } else {

        if (number2 == "") {
            // kyu ki operatorClicked abhi true hai ----------------------------------
            operatorClicked = false                          //yaha false kar diya.-------------------
            operator_enable(Operator);
            console.log("opr  " + operatorSelected);
        } else {
            number2 = number2.slice(0, -1);
            console.log("n2   " + number2)
        }

    }

}

// switch case------------------------------------------------------------------------------------
function calculate() {
    let user1 = parseFloat(number1);
    let user2 = parseFloat(number2);
    let total = 0;

    var output = document.getElementById("input");

    // operation condition--------------------------------------
    switch (operatorSelected) {
        case "+":
            total = user1 + user2;
            equal_disable()
            console.log("total   " + total)
            break
        case "-":
            total = user1 - user2;
            equal_disable()

            console.log("total   " + total)
            break
        case "*":
            total = user1 * user2;
            equal_disable()

            console.log("total   " + total)
            break
        case "/":
            total = user1 / user2;
            equal_disable()

            if (user2 == 0) {
                alert("Can't divide by zero")
                total = "";
            }

            console.log("total   " + total)
            break

        default:
            console.log("invalid operator")
    }

    output.value = total;

    number1 = total;
    number2 = ''
    // Because operatorClicked is true---------------------------------------------------------------
    operatorClicked = false;
    operator_enable(Operator);


}


//clear function ------------------------------------------------------------------------------
function clearResult() {
    var output = document.getElementById("input");
    output.value = "";
    operator_enable(Operator);
    number1 = output.value;
    operatorClicked=false;
    console.log("n1 :- " + number1)

}

//  function for operator disable  --------------------------------------------------------
var Operator = document.querySelectorAll(".special")
// var x;
function operatordisable(x) {
    for (opr of x) {
        // console.log(opr);
        opr.style.pointerEvents = "none";
    }

}


//  function for operator_able  --------------------------------------------------------
function operator_enable(x) {
    for (opr of x) {
        // console.log(opr);
        opr.style.pointerEvents = "auto";
    }
}



// functions for equal button---------------------------------------------------------------
// disable------------
var equalvariable = document.querySelector(".equal")

function equal_disable() {
    equalvariable.disabled = true;
}

// enable------------
function equal_enable() {
    equalvariable.disabled = false;
}