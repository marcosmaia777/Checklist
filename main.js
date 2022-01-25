'use strict'

const criarTarefa = (evento) => {
    evento.preventDefault()
    const input = document.querySelector("[data-form-input]")
    const valor = input.value
    console.log(valor)
    input.value = "correr"}


// Botão
const novaAtividade = document.querySelector("[data-form-button]")
// Eventos
novaAtividade.addEventListener('click' , criarTarefa)   