let peso = 92
let altura = 1.77

let IMC = peso / (altura * altura)

console.log( "Seu IMC é de: " + IMC)

if(IMC <= 18){
    console.log("Você está abaixo do peso!")
} else if(IMC >= 19 && IMC <= 25){
    console.log("Você esta no peso normal")
} else if(IMC >= 26 && IMC <= 30){
    console.log("Você esta com sobrepeso!")
} else if(IMC > 30){
    console.log("Você esta muito acima do peso")
}
