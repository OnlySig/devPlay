import { connectApiTw } from "./TwConectaApi.js";

const lista = document.querySelector('[data-listaTw]')

function TwConstroiCard(title, url) {
    const videoTw = document.createElement('li');
    videoTw.classList.add('videos__itemTw')
    videoTw.innerHTML = `
        <blockquote class="twitter-tweet">
            <p>${title}</p>
            <p lang="pt" dir="ltr"></p>
            &mdash; <a href="${url}"></a>
        </blockquote> 
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        `
    return videoTw
}

async function TwMostraVideo() {
    try {
        const listaApiTw = await connectApiTw.listaVideosTw()
        listaApiTw.forEach(element => {
        lista.appendChild(TwConstroiCard(element.titulo, element.url))
    });
    } catch {
        lista.innerHTML += '<h2 class="mensagem__titulo">!Não foi possível carregar a lista de vídeos do twitter!</h2>'
    }
}

TwMostraVideo()