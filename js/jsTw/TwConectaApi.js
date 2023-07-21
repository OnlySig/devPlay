async function listaVideosTw() {
    const url = await fetch("http://localhost:3000/videosTw");
    const urlJson = await url.json();
    return urlJson
}

async function criaVideoTw(titulo, url) {
    const urlApiTw = await fetch("http://localhost:3000/videosTw", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            url: url
        })
    });
    const urlJson = await urlApiTw.json();
    return urlJson
}

export const connectApiTw = {
    listaVideosTw,
    criaVideoTw
}