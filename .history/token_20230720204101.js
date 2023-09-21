// salva o token no 
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

function postAutenticado(url, body) {
    const token = pegarToken()

    return fetch(url, {
        body: JSON.stringify(body),
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token.access}`
        }
    })
}

function patchAutenticado(url, body) {
    const token = pegarToken()

    return fetch(url, {
        body: JSON.stringify(body),
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token.access}`
        }
    })
}

function deleteAutenticado(url) {
    const token = pegarToken()

    return fetch(url, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token.access}`
        }
    })
}