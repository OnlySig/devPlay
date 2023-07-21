async function listaVideos() {
    const url = await fetch('http://localhost:4000/videosYt');
    const urlJson = await url.json();
    return urlJson
}

async function criaVideo(titulo, descricao, url, imagem) {
    const urlApi = await fetch('http://localhost:4000/videosYt', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });
    const urlJson = await urlApi.json();
    return urlJson
}

async function buscaVideo(termoDeBusca) {
    const url = await fetch(`http://localhost:4000/videosYt?q=${termoDeBusca}`)
    const urlJson = await url.json()

    return urlJson
}

export const conectApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}