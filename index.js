document.addEventListener('DOMContentLoaded', function(){
    console.log ("hello world")

// select the "change color button" and store it in a variable named changeColorButton

    let changeColorButton = document.querySelector('#changeColor')

// select the "change color div" and store it in a variable named colorDiv

    let colorDiv = document.querySelector('#colorDiv')
 
// add a 'click' event listener to the changeColorButton

// within the 'click' event function block:

// change the background color of the div to green

    changeColorButton.addEventListener('click', function(){
 
        colorDiv.style.background = 'green'
 
    })

})








