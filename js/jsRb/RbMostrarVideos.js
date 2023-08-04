import { RbConnect } from "./Rbconnect.js";
const listaRb = document.querySelector("[data-listarb]");

export default function criarCardRb(titulo, url) {
    const video = document.createElement("li");
    video.classList.add("videos__itemRb");
    video.innerHTML = `
        <iframe class="rumble" width="300" height="300" src="${url}" frameborder="0" allowfullscreen></iframe>
        <div class="titleRb">${titulo}</div>
    `
    return video
}

async function mostrarVideoRb() {
    try {
        const listaApiRb = await RbConnect.getVideosRb();
        listaApiRb.forEach(element => {
        listaRb.appendChild(criarCardRb(element.titulo, element.url))
        });
    } catch {
        listaRb.innerHTML += '<h2 class="mensagem__titulo">!Não foi possível carregar a lista de vídeos do rumble, use o json-server na porta 3000!</h2>'
    }
}

mostrarVideoRb()