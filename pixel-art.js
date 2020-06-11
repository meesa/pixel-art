window.onload = function(){
    // Create the thing to hold our 100 elements. 
  let container = document.querySelector('#canvas');
  let currentColor = 'red';
  let palette = document.querySelector('#palette');

  for(let i = 0; i < 400; i++) {
    let box = document.createElement('span');
    box.style.border = '1px solid black';
    box.style.height = '8px'
    box.style.width = '8px'

    box.addEventListener('click', function(event){

        box.style.background = currentColor

    });

    container.appendChild(box);

  }

  let colorChoices = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

  for(let color of colorChoices) {
      let colorPalette = document.createElement('span');
      colorPalette.style.border = '1px solid white';
      colorPalette.style.height = '10px'
      colorPalette.style.width = '30px'
      colorPalette.style.background = color;

      colorPalette.addEventListener('click', function(event){

        currentColor = colorPalette.style.backgroundColor;

      });

      palette.appendChild(colorPalette);

  }



}


// document.addEventListener('DOMContentLoaded', function(){

//     let changeColorButton = document.querySelector('#changeColor')
 
//     let colorDiv = document.querySelector('#colorDiv')
 
//     changeColorButton.addEventListener('click', function(){
 
//         colorDiv.style.background = 'green'
 
//     })
 
//   })