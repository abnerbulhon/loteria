var numSort= []
var numEsco = []

function sorteio(){
  if(numEsco.length == 6){
    var cont = 0;

    numSort = +[];

  
    var cont = 0
    numSort =[]
    while(cont < 6){
        let num = Math.random() * 60
        num = Math.ceil(num)
        if(!numSort.includes(num)){
            numSort[cont] = num
            console.log(numSort)
            cont ++
        }
        
    }

    document.getElementById("sorteados").innerHTML = numSort
    contAcertos();
}else{
    alert ("É necessario digirtar 6 números");

    }


function getValor(valor, pos){
    valor = Number(valor)
    if(valor <= 0 || valor > 60){
        alert("Numero invalido, digite um  entre 1 e 60")
        document.getElementById(`num${pos+1}`).value= ""
    }else if (numEsco.includes(valor)){
        alert("Numero repetido, escolha um outro valor")
        document.getElementById(`num${pos+1}`).value= ""
    }else{
        numEsco[pos] = valor
        console.log(numEsco)
    }
    
}

function contAcertos(){
    var contA = 0
    numEsco.forEach(function(value, index){
        if(numSort.includes(value)){
            contA++
        }
    })
    document.getElementById("acertos").innerHTML = contA
}
