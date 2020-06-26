/*--- código para testar o basico DOM ---*/

// document.getElementById('teste').innerHTML += 'Algum textão aleatório aqui ta okay?';
// console.log(document.getElementsByTagName('p'));
// var x = document.getElementsByClassName('exemplo');
// x[2].innerHTML = 'testestestestestestestestes >:] - nice';
// var x = document.querySelectorAll('p.exemplo');
// console.log(x);

/*
--- tipos importantes de informações do document ---
.baseURI | .body | .doctype | .documentoURI | .domain | .head | .forms | .links | .images | .scripts
*/

//document.write('escrevi alguma coisa');
//document.getElementById('imago').alt = 'kakakakakakakakakakakkaka';
//document.getElementById('teste').style.color = 'lime';


//--- alguns testes que fiz em eventos ---
var vez = 0;
function nice(linha){
    vez++;
    if(vez >= 1 && vez != 4){
        linha.innerHTML = '>:] Nice' + '.'.repeat(vez);
    }
    else{
        vez = 0;
        linha.innerHTML = 'faz dnv pfv :D';
    }
}

function carregado(){
    alert('Ae garai, la paginazita carrego muleke');
}

function mudoBixo(){
    try{
        Bug4daM0n$trrrraGrl();
    }catch(erro){
        alert('ae mano acho que deu uma bugada ai no site véi, saca só: ' + erro);
    }
}

function passoEmMim(linha){
    linha.innerHTML = 'Vaza fi, não ta vendo que eu to filosofando não?';
}
function saiuDeMim(linha){
    linha.innerHTML = 'Até que enfim, achei q o cara ia ficar aqui pra sempre...';
}

/*
    --- eventos uteis ---
    onclick | onload | onchange | onmouseover | onmouseout
    onfocus | onmousedown | onmouseup
*/