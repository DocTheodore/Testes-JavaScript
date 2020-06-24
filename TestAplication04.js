n = 6

//sistema de if e else
if(n > 5){
    console.log('n é maior que cinco');
}
else if(n == 5){
    console.log('n é igual a cinco');
}
else{
    console.log('n é menor que cinco');
}

/*
    == igual
    === igual de valor e tipo
    != diferente
    !== diferente de valor e tipo
    > maior
    < menor
    >= maior ou igual
    <= menor ou igual

    &&  - e
    ||  - ou
    !   - não/negativo
*/

//sistema ternario, um substituto mais rapido para o if e else
n >= 5 ? console.log("sim") : console.log("não");

/* --- estrutura do switch case

   switch(variavel){
       case condição:
           codigo;
           break;
       default:
           codigo;
           break; 
   }

*/ 

var dia = new Date().getDay();
switch (dia){
    case 6:
        console.log('sabado');
        break;
    case 5:
        console.log('sexta');
        break;
    case 4:
        console.log('quinta');
        break;
    case 3:
        console.log('quarta');
        break;
    case 2:
        console.log('terça');
        break;
    case 1:
        console.log('segunda');
        break;
    case 0:
        console.log('domingão');
        break;
    default:
        console.log('tu é marciano fi?');
}

/*--- estruturas de repetição ---*/

var linguagem = ['PHP', 'Java', 'C++', 'Asp', 'Brainfuck'];
for(i = 0; i < linguagem.length; i++){
    if(i == 2){continue;}
    console.log(linguagem[i]);
}

console.log("=================");


//MUITO cuidado com os possiveis contadores infinitos que o while provem
var contador = 0;
while(contador < linguagem.length){
    console.log(linguagem[contador]);
    contador++;
}

console.log("=================");

contador = 0;
do{
    console.log(linguagem[contador]);
    contador++;
}while(contador < linguagem.length)


/*===================== tratamento de excessões pelo javaScript =========================*/

// - Exemplo de try, catch e throw -
function verifica(){
    var x = document.getElementById('numero').value;
    try{
        if(x == '') throw 'Po garai, escreve algo pro tio ai'
        if(isNaN(x)) throw 'Po sacanagem maluco, sabe lê não? é pra por numero!'
        x = Number(x);
        if(x > 40 || x < 20) throw 'Espera ai carinha que mora logo ali, o seu valor ta errado... Agora me da um dolar';
        document.getElementById('msg').innerHTML = 'Parabéns carinha que mora logo ali, agora me da meu dolar';
    }catch(erro){
        document.getElementById('msg').innerHTML = 'Atenção : ' + erro;
    }finally{
        document.getElementById('numero').value = '';
    }
}

var xy = 5;
try{
    if(xy > 10) throw ' o valor de xy ta alto pra caramba meu véi ';
    alert('kakakakakakaka');
}catch(erro){
    alert('Stop right there! you\'re violating the law! Why do you ask? Well... : ' + erro);
}

