function salvarToken(token) {
    localStorage.setItem("TOKEN", JSON.stringify(token))
}

function pegarToken() {
    return JSON.parse(localStorage.getItem("TOKEN"))
}

async function getAutenticado(url) {
    const token = pegarToken()

    const response = fetch(url, {
        headers: {
            "Authorization": `Bearer ${token.access}`
        }
    })
}