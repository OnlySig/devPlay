import { connectApiTw } from "./TwConectaApi.js";
import TwConstroiCard from "./TwMostrarVideos.js";
const botaoSearch = document.querySelector("[data-botao-pesquisa]")
const inputPesquisar = document.querySelector("[data-search]")

async function buscarVideoTw(dadosSearch) {
    const buscaTw = await connectApiTw.buscaVideoTw(dadosSearch)
    const listaTw = document.querySelector("[data-listatw]")
    listaTw.innerHTML = ""
    buscaTw.forEach(element => listaTw.appendChild(TwConstroiCard(element.titulo, element.url)));
}

inputPesquisar.addEventListener("keydown", event => {
    if(event.key === "Enter") {
        event.preventDefault()
        buscarVideoTw(event.target.parentNode.children['pesquisar'].value)
    }
})

botaoSearch.addEventListener("click", event => {
    event.preventDefault()
    buscarVideoTw(event.target.parentNode.children['pesquisar'].value)
})