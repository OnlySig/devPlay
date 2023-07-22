import { conectApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";
const botaoPesquisa = document.querySelector("[data-botao-pesquisa]")
const inputPesquisar = document.querySelector("[data-search]")

async function buscarVideo(dadosPesquisa) {
    const busca = await conectApi.buscaVideo(dadosPesquisa);
    const lista = document.querySelector("[data-lista]")
    lista.innerHTML = ``
    busca.forEach(element => lista.appendChild(constroiCard(element.titulo, element.descricao, element.url, element.imagem)));
}

inputPesquisar.addEventListener("keydown", event => {
    if(event.key === "Enter") {
        event.preventDefault()
        buscarVideo(event.target.parentNode.children['pesquisar'].value)
    }
})

botaoPesquisa.addEventListener("click", event => {
    event.preventDefault(event);
    buscarVideo(event.target.parentNode.children["pesquisar"].value);
})