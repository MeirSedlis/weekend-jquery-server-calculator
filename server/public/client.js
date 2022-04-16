$(document).ready(onReady);

function onReady(){
    console.log('wired up JQ!');
    $('#clearButton').on('click', clear);
    $('#submitButton').on('click', onSubmit);
    $('.operator').on('click', assignOperator);
}

let operator;

// clear the inputs
function clear(){
    $('input').val('');
}

// read button data and assign it to the global operator variable
function assignOperator(){
    operator = $(this).text();
}

// grab the inputs and create our math object
function onSubmit(){
    let mathToDo = {
        num1: $('#num1').val(),
        operator: operator,
        num2: $('#num2').val()
    }
    console.log(mathToDo);
}

// send input data to the server
// function createMath(){
// $.ajax({
//     method: 'POST',

// })
// }

