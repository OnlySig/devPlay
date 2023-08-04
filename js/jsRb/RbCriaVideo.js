import { RbConnect } from "./Rbconnect.js";
const formularioRb = document.querySelector("[data-formulario]");

async function pegaElementos(e, titleRb, urlRb) {
    e.preventDefault();
    await RbConnect.criaVideoRb(titleRb, urlRb);
    window.location.href = "../pages/envio-concluido.html"
}

formularioRb.addEventListener("submit", event => pegaElementos(event, event.target["titulo"].value, event.target["url"].value))