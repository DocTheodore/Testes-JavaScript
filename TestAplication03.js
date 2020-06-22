//Para usar um caractere especial dentro de uma string, é preciso colocar uma \ para anular o efeito do caractere
//Caso você queira usar uma \ invertida no texto, você precisa colocar \\, para que o js coocque uma barra
// -------- var txt = 'pego fogo na caxa d\'agua!!!! \\ ';
var txt = "para aprender Java, simplesmente pesquise no Google!";
// -------- console.log(txt.slice(0, 4));

//Exemplos de pesquisa em strings
var textos = 'Um texto aleatório, para aprender Java, simplesmente pesquise no Google!';
var pesquisa = 'Google';
// -------- console.log(textos.slice(textos.indexOf(pesquisa), textos.indexOf(pesquisa) + pesquisa.length));

//Procura e mostra uma palavra pesquisada no console
function resultado(texto = 'placeholder', palavra = 'placeholder'){
    console.log('A palavra ' + texto.slice(texto.indexOf(palavra), texto.indexOf(palavra) + palavra.length) + ' se encontra no ' + texto.indexOf(palavra) + ' lugar do texto');
}

var numero = 20 / (25 + 5);
/* -------- */ console.log(numero.toPrecision(2));

//=======================================================================
//data e hora

var dday = new Date();                        // presente
var dday = new Date(/*86400000*/);            // primeiro dia do calendario digital (Passado)
/* -------- var dday = new Date('Mon Jun 22 2020 12:58:01 GMT-0300 (Horário Padrão de Brasília)')   --- horario fixo em string
   -------- var dday = new Date(ano, mes, dia, hora, minuto, segundo, milisegundo);                 --- horario fixo por variaveis */

//formas diferentes de mostrar as datas
console.log(dday);
console.log(dday.toUTCString());
console.log(dday.toDateString());

//get e set nas dates
//set funciona da mesma forma que o get! mas ele define
console.log('Data ' + dday.getDate());
console.log('Dia  ' + dday.getDay());
console.log('Ano  ' + dday.getFullYear());
console.log('Hora ' + dday.getHours());
console.log('mSeg ' + dday.getMilliseconds());
console.log('Min  ' + dday.getMinutes());
console.log('Mês  ' + dday.getMonth());    //atenção o verdadeiro mês é .getMonth() + 1, pois javascript...
console.log('Seg  ' + dday.getSeconds());
console.log('Temp ' + dday.getTime());

//função que formata a data para o formato pt-br
function formataDatas(data = new Date()){
    var dia = data.getDate();
    var mês = data.getMonth() + 1;
    var ano = data.getFullYear();

    if(dia.toString().length == 1){
        dia = '0' + dia;
    }
    if(mês.toString().length == 1){
        mês = '0' + mês;
    }

    console.log(dia +'/'+ mês +'/'+ ano);
}
formataDatas(dday);