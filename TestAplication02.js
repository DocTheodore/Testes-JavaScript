/* Uma função é um bloco de código que realiza uma tarefa especifica */
/* Usado quando há nescessidade de epetir uma linha de código duas vezes ou mais */
/* Evite criar uma função universal, tente criar cada função para cada tarefa especifica */
var palavra = 'o seu numero é ';
function alerta(msg){
    alert(palavra + msg);
}
function dividir(num1, num2 = 2){
    return num1/num2;
}
/* Invocação de função */
// alerta(dividir(400, 30));

/* Quando um volor da função não é definido, a função sempre optara por um valor padrão na forma de " variavel = algo " */


/*=======================================*/


/* Objetos e arrays */
//Array
//Melhor utilizados em listas
var frutas = ['Laranja','Pepino','Toranja','Amendoin'];
//Objeto - NOTA, para guardar valores em variaveis de um objeto, use : ao invés de =
//Melhor utilizado em declarações de diversos grupos de variaveis semelhantes
//Você pode colocar functions dentro de objetos!
var agente = {
    nome:'Perry',
    especie:'Ornintorrinco',
    status:'Ativo',
    Derrotar: function(nomeFarmaceutico){
        alert(agente.nome + ' Ataque o '+ nomeFarmaceutico)
        return nomeFarmaceutico
    }
}
//========================================================
//Adiciona um item a ultima posição do array + 1
frutas.push('Pitanga');
//Adiciona um item a primeira posição do Array
frutas.unshift('Abacate');
//Remove o ultimo item da lista do Array
frutas.pop();
//Remove o primeiro item da lista do Array
frutas.shift();
//========================================================
//Organiza os itens do array de forma alphabética
frutas.sort();
//Reverte a ordem dos itens do Array
frutas.reverse();
//========================================================
//Retorna o valor do Array atualmente
console.log(frutas.length);
//Coloca algum tipo de caractere entre os itens do array
console.log('| ' + frutas.join(' | ') + ' |');
//Transforma todos os itens do Array em um unico texto
console.log(frutas.toString());