function salvarToken(token) {
    localStorage.setItem("TOKEN", JSON.stringify(token))
}

function pegarToken() {
    return JSON.parse(localStorage.getItem("TOKEN"))
}

function getAutenticado(url) {
    const token = pegarToken()

    return fetch(url, {
        headers: {
            "Authorization": `Bearer ${token.access}`
        }
    })
}

function postAutenticado(url, obj) {
    const token = pegarToken()

    return fetch(url, {
        headers: {
            "Authorization": `Bearer ${token.access}`
        }
    })
}