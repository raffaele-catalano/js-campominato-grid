// DEVELOPMENT
/*
    1- stabilire una costante per il *container*
    2- creare un ciclo *for* al cui interno inserire un *evento al click*
        che colora in modo differente lo "square"
        (prendere spunto dagli appunti di stamattina)
    3- creare una *function* che generi come *return* un nuovo square
        ed invocarla nel ciclo *for*
    4- *appendare* gli squares nel container

*/


const container = document.querySelector('.container');

for (let i = 0; i < 100; i++) {
    //ad ogni ciclo creo uno square
    const square = squaresGenerator();
        // console.log(square);
        
    square.addEventListener('click', function(){
        // al click su uno square cambia colore prendendo la classe "clicked"
        this.classList.toggle('clicked');
    })

    container.appendChild(square)
}


//   **********     FUNCTIONS     **********
/**
 * this function genereates new "squares"
 * @returns new square generated
 */
function squaresGenerator() {
    //creazione di un elemento "div"
    const newSquare = document.createElement('div');
    //aggiungere classe
    newSquare.className = 'square'

    return newSquare
}