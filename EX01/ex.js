const btnExecutar = document.getElementById('executarBtn');

const btnExecutarClick = function () {
    let parateste = cores(); 
    alert(parateste.apresentar()); 
}

// function apresentar () {
//     let name = prompt("Qual seu nome");
//     let idade = prompt ("Qual sua idade")
//     let profissao = prompt ("Qual sua Profisão")
//     return ' Bem vindo ' + name + '\nVocê tem ' +idade + ' anos ' + '\nSua profisão é ' + profissao

// }

// function OperadoresMatematicos(){

//     //executam com base em valores e retornam
//     resultado = resultado +10;
//     resultado = resultado -10;
//     resultado = resultado *10;
//     resultado = resultado /10;


//     //Executam com base em um valor existente
//     resultado += 10;
//     resultado -= 10;
//     resultado *= 10;
//     resultado /= 10;

// }

// function Operador() {

//     //ex01
//     let numero01 = parseFloat(prompt("Digite um número para soma"));
//     let numero02 = parseFloat(prompt("Digite outro número"));
//     alert(`O resultado da soma é ${numero01 + numero02}`)
     
//     //ex02
//      numero01 = parseFloat(prompt("Digite um número para subtração"));
//      numero02 = parseFloat(prompt("Digite outro número"));
//     alert(`O resultado da soma é ${numero01 - numero02}`)

//     //ex03
//     numero01 = parseFloat(prompt("Informe um número para a elevação do quadrado"))
//     alert(` O quadrado do número é ${numero01} é igual a : ${numero01 * numero02}`)
// }

// function operadoresComparativo () {

/*
-> Verifica se é igual

=== -> Verifica se é igual, levando em consideração o tipo do dado

!= -> Verifica se é diferente

!== -> Verifica se é diferente, levando em consideração o tipo do dados

> -> Maior que

>= -> Maior ou igual que

< -> Menos que

<= -> Menor ou igual que

*/

// console.log(6 == 6);
// console.log("6" == 6);
// console.log("06" == 6);
// console.log("6" == 6);
// console.log(6 != "6");
// console.log(6 != "6");
// console.log("6" != "6");

// console.log(6 > 2);
// console.log(6 > "2");
// console.log(6 >= 2);
// console.log(6 < 10);
// console.log(6 <= 2);





// function objetos(){
    // let pessoa = {
    //     apresentar: function (){
    //         `Olá meu nome é ${this.nome} Tenho ${this.idade} anos. Meu CPF é ${this.cpf}!`
    //     }
    

    // pessoa.nome = prompt("Informe seu nome")
    // pessoa.idade = prompt("Informe sua idade")
    // pessoa.cpf = prompt("Informe seu cpf")

    // return pessoa;


// push - Add
// pop - remove
//shift - remove primeiro
//unshift - Adiciona inicio

// function arrays (){
//     let array = [1,2,3,4,5];

//     console.log(JSON.stringify(array));

//     array.push(6);
//     console.log(JSON.stringify(array));

//     array.pop();
//     console.log(JSON.stringify(array));

//     array.shift();
//     console.log(JSON.stringify(array));

//     array.unshift(5667);
//     console.log(JSON.stringify(array));

//     array.forEach(function(elemento){
//         console.log(elemento);
// });
   





    
//Exercícios


// //EX001/EX002
// function excarros(){
//     let  carro = {
//       apresentar:function(){
//         return`O nome do Carro : ${this.nome} \na Marca : ${this.marca}  \no Ano : ${this.ano} \na Cor : ${this.cor}`
//       }

//     }
//     carro.nome = prompt ("Digite um nome para o carro")
//     carro.marca = prompt ("Insira uma Marca")
//     carro.cor = prompt ("Insira uma cor para o carro")
//     carro.ano = new Date().getFullYear();

//     return carro;
// }

//EX003
// function livros () {
//     const informacao = {
//         titulo : "O mágico",
//         autor : "Neni",
//         ano : 1992,
//      }
//     let livro = {
//         apresentar:function(){
//             return `Título do livro : ${informacao.titulo} \nAutor do Livro : ${informacao.autor} \nAno do livro : ${informacao.ano}`
//         }
//     }


    
    
//     return livro;
       
// }

//EX004
function cores () {
      let cor = {
      apresentar:function(){
        return array
      }
    }

    let array = ["Azul","Vermelho","Amarelo"]

    array.shift()
    console.log(JSON.stringify(array));

   return cor;
}


btnExecutar.addEventListener('click', btnExecutarClick)