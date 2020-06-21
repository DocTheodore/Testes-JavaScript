/* MUITO cuidado, erros cometidos em js não aparecem no navegador de forma explicita na hora de testar!!!
por isso é importante sempre inspecionar todas as vezes */

// comentario
/* comentario de multiplas linhas */

// O javascript é CaseSensitive!!!

/*
var x = 'testestestes';
alert(x + ' primeiro teste');
*/

/*correto porem trabalhoso

    var numero;
    numero = 999;

*/

// correto, porém é possivel diminuir ainda mais
/* var numero = 999; - - - - - evite colocar a declaração de uma variavel numa linha diferente do valor
   var nome = ' dracula ';
   var vampiro = true;
*/

//exemplo de variavel
var numero = 999, nome = ' dracula ', vampiro = true; /* escreva o nome da variavel para chamar */
//explo de array
var formacao = ['html', 'css' , 'javascript'] /* escreva o nome do array[numero] para chamar */
//explo de objeto
var colher = {valor: 30, metal: 'aluminio', temDono: false}; /* escreva o nome do objeto.variavel para chamar */

// explo de variavel vazia
var texto = '';
// exemplo de variavel nula
var palavra = null;

// a redeclaração de variaveis de maneira indefinida não sobrescreve o valor original!!!

var x = 10, y = 20, z = 2;
 /* y++;  exemplo de incremento */
 var r = (x + y) / z;

console.log(r);