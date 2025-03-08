const btnExecutar = document.getElementById('executar');

const btnExecutarClick = function () {
    alert(bemvindo());
}

function bemvindo () {
    let name = prompt("Qual seu nome");
    
}

btnExecutar.addEventListener('click', btnExecutarClick)