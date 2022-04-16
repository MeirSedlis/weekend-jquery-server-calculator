$(document).ready(onReady);

function onReady() {
  console.log("wired up JQ!");
  $("#clearButton").on("click", clear);
  $("#submitButton").on("click", onSubmit);
  $(".operator").on("click", assignOperator);
}

let operator;

// clear the inputs
function clear() {
  $("input").val("");
}

// read button data and assign it to the global operator variable
function assignOperator() {
  operator = $(this).text();
}

// grab the inputs and create our math object to feed to createMath
function onSubmit() {
  let mathToDo = {
    num1: $("#num1").val(),
    operator: operator,
    num2: $("#num2").val(),
  };
  createMath(mathToDo);
  clear();
}

// send input data to the server
function createMath(mathToDo) {
  $.ajax({
    method: "POST",
    url: "/math",
    data: mathToDo,
  }).then(function (response) {
    console.log("response of POST is:");
    console.log(response);
    getMath();
  });
}

// get response from server and append it to DOM
function getMath() {
  $.ajax({
    method: "GET",
    url: "/math",
  }).then(function (response) {
    // console.log("I got a thing!");
    // console.log(response);
    $("#history").empty();
    $("#result").empty();
    $("#result").append(`${response[response.length - 1].answer}`);
    for (let aCalculation of response) {
      $("#history").append(`
        <li>${aCalculation.num1} ${aCalculation.operator} ${aCalculation.num2} = ${aCalculation.answer}</li>
        `);
    }
  });
}
