window.onload=function(){
    var zebroso = document.querySelectorAll('.zebra tbody tr');
    for(var i = 0; i < zebroso.length; i += 2){
        zebroso[i].className = 'zebrada';
    }
}

console.log(document);
console.log(window);

//como salavar itens no pc do usuario
window.localStorage.setItem('nome', 'James'); //fica salva com os cookies
window.sessionStorage.setItem('nome2', 'Theodore') // fica salvo só se a pagina estiver aberta
document.getElementById('msg').innerHTML = window.localStorage.getItem('nome') + ' ' + window.sessionStorage.getItem('nome2');

//abrir outras janelas no navegador
var janela = window.open('http://google.com', '', 'width=500, height=400');
janela.document.write('zoando o goole gagagagaagagagagga');
janela.opener.document.write('zoando o próprio site garai gagagagagaag');

//comandos especificos de tempo
//var tempo = setTimeout(viagemTemporal, 5000);
var loop = setInterval(loopTemporal, 3000);
function viagemTemporal(){
    document.getElementById('msg').innerHTML = 'passo 5 segundos cara, vai dormi';
}
function loopTemporal(){
    console.log('msg que loopa no tempo, saco?');  
}

//exemplo de loop que só funciona quando o usuario tem a pagina ligada
var intervalo = setInterval(verificacao, 1000);
var contador = 0;
function verificacao(){
    if(document.hasFocus()){
        contador++;
        console.log(contador);
        if(contador >= 10){
            viagemTemporal()
            clearInterval(intervalo);
        }
    }
}