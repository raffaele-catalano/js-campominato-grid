// DEVELOPMENT
/*
    1- stabilire una costante per il *container*
    2- creare un ciclo *for* al cui interno inserire un *evento al click*
        che colora in modo differente lo "square"
        (prendere spunto dagli appunti di stamattina)
    3- creare una *function* che generi come *return* un nuovo square
        ed invocarla nel ciclo *for*
    4- *appendare* gli squares nel container
    5- aggiungere la generazione di un numero all'interno della funzione
        e richiamare il parametro di quest'ultima all'interno del ciclo
        e viceversa
    6- inserire il ciclo all'interno di una funzione collegata con il <select>
        ed il suo *value*
*/


const container = document.querySelector('.container');
const select = document.querySelector('select');


document.querySelector('button').addEventListener('click', function() {

    // alla sezione della difficoltà viene rimossa la classe .hide al container
    container.classList.remove('hide')

    for (let i = 1; i <= select.value; i++) {
        //ad ogni ciclo creo uno square
        const square = squaresGenerator(i);

        //TODO: sostituire con uno switch-case se possibile
        
        if (select.value == 81) {
            square.classList.add('square81')
        } else if (select.value == 49) {
            square.classList.add('square49')
        } else 
            square.classList.add('square100')
            
        square.addEventListener('click', function(){
            // al click su uno square cambia colore prendendo la classe "clicked"
            this.classList.toggle('clicked');
            console.log('valore dello square -->', square.innerText);
        })

        container.appendChild(square)
    }
});

//   **********     FUNCTIONS     **********
/**
 * this function genereates new "squares"
 * @param {number} number 
 * @returns new square generator
 */
function squaresGenerator(number) {
    //creazione di un elemento "div"
    const newSquare = document.createElement('div');

    newSquare.innerText = number;
    //aggiungere classe
    newSquare.className = 'square'

    return newSquare
}