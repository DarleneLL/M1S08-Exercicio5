// Altere o estilo de todos os elementos de uma página HTML 
// que tenham uma determinada classe.

let mudaEstilo = document.querySelectorAll(".mudaEstilo");
mudaEstilo.forEach(element => {
    element.style.backgroundColor = 'blue';
    element.style.height='200px';
    element.style.width='200px';
    element.style.display = 'flex';
    element.style.color = "yellow"
}); 
