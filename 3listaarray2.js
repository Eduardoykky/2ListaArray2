/*
Crie um algoritmo que pergunte 5 números ao usuário, coloque em um array,
depois exiba tal array. Modifique os elementos do array de modo que a
sequência de números fique ao contrário.
Ex.: se digitou 1, 2, 3,4, 5
 tem que ficar 5, 4, 3, 2 , 1
*/
var n1 = []
var contrario = []
var contador = 0
for (var index = 0; index < 5; index++) {
    n1[index] = parseInt(prompt("Insira um número"))
    
}
console.log(n1)

for (var index1 = 4; index1 >= 0; index1--) {
    contrario[index1] = n1[contador]
    contador++
}

console.log(contrario)