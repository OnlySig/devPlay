async function getVideosRb() {
    const url = await fetch("http://localhost:3000/videosRb")
    const urlJson = await url.json()
    return urlJson
}

async function criaVideoRb(titulo, url) {
    const urlRb = await fetch("http://localhost:3000/videosRb", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            url: url
        })
    });
    const urlJson = await urlRb.json()
    return urlJson
}

async function buscaVideoRb(pesquisa) {
    const url = await fetch(`http://localhost:3000/videosRb?q=${pesquisa}`);
    const urlJson = await url.json()
    return urlJson
}

export const RbConnect = {
    getVideosRb,
    criaVideoRb,
    buscaVideoRb
}