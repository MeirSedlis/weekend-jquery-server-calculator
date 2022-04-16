// push results objects to this array for render to the DOM
const history = [];
let answer;

// load libraries
const express = require("express");
const bodyParser = require("body-parser");

// generate server and routes

const app = express();
app.use(express.static("./server/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// define a GET route
app.get("/math", (req, res) => {
  console.log("GET /math");
  res.send(history);
});

// define a POST route
app.post("/math", (req, res) => {
  console.log("POST /math");
  let calculationObject = req.body;
  console.log(calculationObject);
  doMath(calculationObject);
  console.log(answer);
  res.sendStatus(200);
});

// use a switch statement to evaluate the calculation object
    // create new object with answer and push it to the history array
function doMath(calculationObject) {
  switch (calculationObject.operator) {
    case "+":
      answer = Number(calculationObject.num1) + Number(calculationObject.num2);
      break;
    case "-":
      answer = Number(calculationObject.num1) - Number(calculationObject.num2);
      break;
    case "*":
      answer = Number(calculationObject.num1) * Number(calculationObject.num2);
      break;
    case "/":
      answer = Number(calculationObject.num1) / Number(calculationObject.num2);
      break;
  }
  let newCalculation = {
    num1: calculationObject.num1,
    operator: calculationObject.operator,
    num2: calculationObject.num2,
    answer: answer,
  };
  history.push(newCalculation);
}
// declare port
const PORT = 5000;

// start server
app.listen(PORT, function () {
  console.log(`server is running at http://localhost:${PORT}`);
});
