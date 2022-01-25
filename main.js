'use strict'
// botão
const novaAtividade = document.querySelector("[data-form-button]")


// valor imput no console
novaAtividade.addEventListener("click" , () =>{   
    const imput = document.querySelector("[data-form-input]")
    const valor = imput.value
    console.log(valor)})