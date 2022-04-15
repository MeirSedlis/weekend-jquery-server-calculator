# front end config
## HTML
  - [ ] Link and source relevant files
  - [ ] Create an h1 for the title
    - [ ] Generate a 'div' for the app
        - [ ] a text input for the first number
        - [ ] four "math" operator buttons: '+' '-' '*' '/' that reassign a global operator variable that will HOLD whatever the last button pressed was
        - [ ] a text input for the second number
        - [ ] a '=' button (will send data to server)
        - [ ] 'C' button
    - [ ] a 'display' for the result of the current operation
    - [ ] a history of previous calculations
## CSS
  **I'm thinking of styling this to look like a store's register** 

- [ ] light blue background 
- [ ] grey fonts with red accents
- [ ] monospaced font families inside inputs, lightweight
- [ ] curly retro chunky fonts for header 
- [ ] overly stylized script for history 

## JavaScript
- [ ] onReady and all that
- [ ] create a click listener for the '=' 
    - [ ] calls our calculate function 
        - [ ] creates an object num1, operator, num2
        - [ ] sends to the server in a POST route
        - [ ] calls back the server function that gives us the display
    - [ ] calls the function to render the new display data to the DOM
-  [ ] create a click listener for the 'C' that:
    - [x] $('input').val('');
- [ ] do a GET request 
    - [ ] render calculation history
    - [ ] render latest answer to DISPLAY

# back end config

- [ ] build the server
- [ ] we need to store a history 
    - [ ] an array including the data that was sent and the answer
- [ ] inside the POST ROUTE:
    - [ ] receive calculation object in req.body
    - [ ] do the math
    - [ ] put it all into a result object
    - [ ] push new object into a history array
    - [ ] then send back OK (200)