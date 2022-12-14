
/*
    Consegna:
    Data una lista della spesa (inventatela), stampare in pagina gli elementi della lista individualmente con un ciclo while.  (anche brutalmente, basta che si vedano)
    Bonus:
    Provare a stampare sia con i template literals che con i nodi, manipolando il DOM.const 
*/


// Prendo l'elemento dal Dom
const targetElement = document.getElementById('target') 
// Preparo la lista 
let listContainer = '<ul>'
// Creao l'array con la lista della spesa
const listArray = ['uova', 'latte', 'acqua', 'pasta'];

// Assegno la variabile i fuori dal ciclo while 
let i = 0
while (i < listArray.length) {
    listContainer += `<li> ${listArray[i]} </li>`;
    i++;
};

// Chiudo l'ul della lista 
listContainer += '</ul>';
// Preparo l'elemento da stampare in pagina 
targetElement.innerHTML = listContainer;