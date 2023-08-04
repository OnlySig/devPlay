import { connectApiTw } from "./TwConectaApi.js";
const formularioTw = document.querySelector("[data-formulario]");

async function criarVideoTw(event, titulo, url) {
    event.preventDefault();
    await connectApiTw.criaVideoTw(titulo, url)
    window.location.href = "../pages/envio-concluido.html"
}

formularioTw.addEventListener("submit", event => criarVideoTw(event, event.target["titulo"].value, event.target["url"].value))