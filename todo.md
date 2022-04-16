# front end config
## HTML
  - [x] Link and source relevant files
  - [x] Create an h1 for the title
    - [x] Generate a 'div' for the app
        - [x] a text input for the first number
        - [x] four "math" operator buttons: '+' '-' '*' '/' that reassign a global operator variable that will HOLD whatever the last button pressed was
        - [x] a text input for the second number
        - [x] a '=' button (will send data to server)
        - [x] 'C' button
    - [x] a 'display' for the result of the current operation
    - [x] a history of previous calculations
## CSS
  **I'm thinking of styling this to look like a store's register** 

- [x] light blue background 
- [x] grey fonts with red accents
- [x] monospaced font families inside inputs
- [x] curly retro chunky fonts for header 
- [ ] overly stylized script for history 

## JavaScript
- [x] onReady and all that
- [x] create a click listener for the '=' 
    - [ ] calls our calculate function 
        - [x] creates an object num1, operator, num2
        - [x] sends to the server in a POST route
        - [x] calls back the server function that gives us the display
    - [x] calls the function to render the new display data to the DOM
-  [x] create a click listener for the 'C' that:
    - [x] $('input').val('');
- [x] do a GET request 
    - [x] render calculation history
    - [x] render latest answer to DISPLAY

# back end config

- [x] build the server
- [x] we need to store a history 
    - [ ] an array including the data that was sent and the answer
- [ ] inside the POST ROUTE:
    - [ ] receive calculation object in req.body
    - [ ] do the math
    - [ ] put it all into a result object
    - [ ] push new object into a history array
    - [ ] then send back OK (200)
