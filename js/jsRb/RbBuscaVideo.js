import { RbConnect } from "./Rbconnect.js";
import criarCardRb from "./RbMostrarVideos.js";
const listaRb = document.querySelector("[data-listarb]");
const botaoPesquisa = document.querySelector("[data-botao-pesquisa]");
const inputPesquisar = document.querySelector("[data-search]")

async function pesquisaRb(pesquisa) {
    const searchApiRb = await RbConnect.buscaVideoRb(pesquisa)
    listaRb.innerHTML = ""
    searchApiRb.forEach(element => listaRb.appendChild(criarCardRb(element.titulo, element.url)));
}

botaoPesquisa.addEventListener("click", event => pesquisaRb(event.target.parentNode.children["pesquisar"].value));

inputPesquisar.addEventListener("keydown", event => {
    if(event.key == "Enter") {
        pesquisaRb(event.target.parentNode.children["pesquisar"].value)
    }
});