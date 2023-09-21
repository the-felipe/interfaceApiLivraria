// salva o token no armazenamento local
function salvarToken(token) {
    localStorage.setItem("TOKEN", JSON.stringify(token))
}

// pega o token de volta
function pegarToken() {
    return JSON.parse(localStorage.getItem("TOKEN"))
}

// faz uma requisição GET pra URL usando o token
function getAutenticado(url) {
    const token = pegarToken()

    return fetch(url, {
        headers: {
            "Authorization": `Bearer ${token.access}`
        }
    })
}

// faz uma requisição POST pra URL usando o token
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

// faz uma requisição PATCH pra URL usando o token
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

// faz uma requisição GET pra URL usando o token
function deleteAutenticado(url) {
    const token = pegarToken()

    return fetch(url, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token.access}`
        }
    })
}