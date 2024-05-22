document.addEventListener('DOMContentLoaded', function() {
    

    let canvas = document.querySelector("#grid");

    canvas.addEventListener('click', () => {
        let size = document.createElement('input');
        size.setAttribute('id', 'size');
        size.setAttribute('type', 'number');
        size.setAttribute('max', '100');
        let enter = document.createElement('button');
        enter.setAttribute('style', 'margin-bottom:20px;')
        enter.innerText = 'Enter';

        document.querySelector('.menu').innerHTML = "";

        document.querySelector('.menu').appendChild(size);
        document.querySelector('.menu').appendChild(enter);

        enter.addEventListener('click', () => {
            let newCanvasSize = parseInt(document.getElementById('size').value);

            if (newCanvasSize <= 100) {

                let canvas = document.querySelector('.canvas');
                canvas.innerHTML = "";

                for (let i = 0; i < newCanvasSize; i++) {
                    let row = document.createElement('div');
                    row.classList.add('row');
                    for (let l = 0; l < newCanvasSize; l++) {
                        let square = document.createElement('div');
                        let squareSize = 512 / newCanvasSize;
                        square.setAttribute('style', `width:${squareSize}px; height:${squareSize}px`);
                        square.classList.add('square');
                        row.appendChild(square);
                    }
                    canvas.appendChild(row);
                }

                let squares = document.querySelectorAll('.square');
                squares.forEach(square => {
                    square.addEventListener('mouseover', () => {
                        let element = window.getComputedStyle(square);
                        let opacity = parseInt(element.getPropertyValue('opacity'));
                        //console.log(element.getPropertyValue('background-color'));
                        //console.log(opacity);
                        if (element.getPropertyValue('background-color') === 'rgba(0, 0, 0, 0)') {
                            square.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, 
                                                                ${Math.floor(Math.random() * 255)}, 
                                                                ${Math.floor(Math.random() * 255)})`;
                            square.style.opacity = '0.1';
                        } else if (parseFloat(element.getPropertyValue('opacity')) >= 0.1) {
                            let opacity = parseFloat(element.getPropertyValue('opacity'));
                            console.log(opacity);
                            square.style.opacity = `${opacity + 0.1}`;
                        }
                    })
                })

            } else {
                alert('Pick a smaller number');
            }
        })
    })

    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            let element = window.getComputedStyle(square);
            
            console.log(`Color is: ${element.getPropertyValue('background-color')}`);
            
            if (element.getPropertyValue('background-color') === 'rgba(0, 0, 0, 0)') {
                square.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, 
                                                    ${Math.floor(Math.random() * 255)}, 
                                                    ${Math.floor(Math.random() * 255)})`;
                square.style.opacity = '0.1';
            } else if (parseFloat(element.getPropertyValue('opacity')) >= 0.1) {
                let opacity = parseFloat(element.getPropertyValue('opacity'));
                console.log(opacity);
                square.style.opacity = `${opacity + 0.1}`;
            }
        })
    })
})