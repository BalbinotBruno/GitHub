let produto = "leite"
let quantidade = 22

if(produto == "leite" && quantidade >= 1){
    console.log("Voce possui o produto Leite e contem: " + quantidade + " Unidades")
    
} else  if (quantidade <= 0){
    console.log("Seu estoque deste produto esta zerado")


} else if (produto != "leite"){
    console.log("Este produto ão esta cadastrado")
}
