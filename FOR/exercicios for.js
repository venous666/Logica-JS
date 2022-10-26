// function ui()
// for ( let i = 1; i <= 3; i++){
//     let nota = parseFloat(prompt('Digite a primeira nota'))
// let nota2 = parseFloat(prompt('digite a segunda nota'))
// let media = parseFloat(nota + nota2)/2
// alert(media)

// }

// for( let i = 1; i<= 5; i++){
//     let produto = parseFloat(prompt('insira o preço do produto'))
//     let quantidade = parseFloat(prompt('insira a quantidade do produto escolhido'))
//     let resultado = produto * quantidade 
//     if(resultado >= 100){
//         console.log('este produto custa mais de 100 reais, e foi',resultado)
//     } else{
//         console.log('o produto custou', resultado)
//     }
// } 

// for(let i = 1; i<= 10; i++){
//     let numero = parseInt(prompt('Insira um numero inteiro'))
//     if(numero >= 1){
//         alert('esse numero é positivo ')
//     }else{
//         alert('esse é um numero negativo')
//     }

// }
for( let i = 1; i<= 150; i ++){
    let preçocusto = parseFloat (prompt('insira o valor de custo'))
    let preçovenda = parseFloat (prompt('insira o valor que é vendido'))
   console.log('lucro é', preçocusto - preçovenda)
    let tipo = (prompt('insira o tipo'))
    if(tipo === 'C'){
        console.log( tipo + 1)
    } else{
        console.log(tipo)
    }
}
