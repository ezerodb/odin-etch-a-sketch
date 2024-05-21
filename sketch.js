document.addEventListener('DOMContentLoaded', function() {
    let squares = document.querySelectorAll('.squares');

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

            console.log(newCanvasSize);

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

        })
    })
})