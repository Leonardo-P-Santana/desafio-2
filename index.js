let resultadoSaldo = saldoPt(74,6)
let nivelRank = ""

function saldoPt (vitoria, derrota){
    return vitoria-derrota
}

if (resultadoSaldo <= 10){
   nivelRank = "Ferro"
} else if (resultadoSaldo >= 11 && resultadoSaldo <= 20){ 
    nivelRank = "Bronze "
} else if (resultadoSaldo >= 21 && resultadoSaldo <= 50){ 
    nivelRank = "Prata "
} else if (resultadoSaldo >= 51 && resultadoSaldo <= 80){ 
    nivelRank = "Ouro"
} else if (resultadoSaldo >= 81 && resultadoSaldo <= 90){ 
    nivelRank = "Diamante"
} else if (resultadoSaldo >= 91 && resultadoSaldo <= 100){ 
    nivelRank = "Lendario"
} else{
    nivelRank = "Imortal"
}

function nivelDoHeroi(){
    console.log("O herói tem o saldo de " + resultadoSaldo + " vitórias e está no nível de " + nivelRank)
}

nivelDoHeroi()