# Virtual Printing Calculator

[Project Instructions](./INSTRUCTIONS.md)

## Description

This was the second weekend solo project for the Prime Digital Academy Full Stack training program, and my first attempt at building a server for an app.

The most challenging problems for this project were:
- how to make "operator" buttons function
- how to send math back and forth
- how to "do" math on the server 

In order to solve the problem of operator buttons, I tried this: 

`function assignOperator(){
    console.log($(this).text());
}`

with a variety of methods until I landed on .text. This has been a very powerful tool while constructing event handlers, as the console.log gives me insight into what information I have access to with a given method. 

While sending my math objects back and forth, I encountered a problem in which the answers were not being included with the server response. In order to address this problem, I created a new object in my server-side math function and pushed that to the array. For the future, I wonder if there's a cleaner way to add the answer to the original math object or if creating new objects to send back is a best practice.

Finally, for the problem of how to "do" the math, I knew I was going to have to construct an if statement, but I was concerned that the logic be clear enough that I could come back to it 6 months to a year from now and know what I was trying to do. This felt like a great chance to use a switch statement, and I feel that the result is very clean and extremely easy to read. 

I had created a comprehensive [todo.md](/todo.md) using the project [instructions](/INSTRUCTIONS.md) before cloning the file down to my computer, and was able to update it further during class when our instructor, Matt demonstrated how he would create a todo for this project. I was able to complete base mode for this project much earlier than I planned on, and instead of attempting stretch goals, I wanted to challenge myself with CSS by adding some animation and styling the page to look like a real world object - a printing calculator. 

For this, I downloaded two free fonts and read tutorials on glow animations on StackOverflow and W3Schools and ended up modifying a bit of code off [W3Schools](https://www.w3schools.com/howto/howto_css_glowing_text.asp) to try to emulate a digital display for my calculator. I don't love how the elements are aligned on my page and if I had more time, I would like to fix them. 

## Screenshot

[PREVIEW](/images/screenshot.png)

## Built With

- HTML
- CSS
- Javascript
- jQuery
- Express

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. Special thanks to the members of the Dahl cohort for support and coworking throughout the project.

## Support
If you have suggestions or issues, please email me at [meirsedlis@gmail.com](mailto:meirsedlis@gmail.com?subject=Virtual%Printing%Calculator)