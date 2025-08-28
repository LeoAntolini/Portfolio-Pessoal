const urlAPI = 'https://raw.githubusercontent.com/ozh/github-colors/master/colors.json'

async function carregarCores() {
    const resposta = await fetch(urlAPI)
    const linguagens = await resposta.json();
    
    const linguagensEmMinusculo = {}
    for (let lang in linguagens) {
        linguagensEmMinusculo[lang.toLowerCase()] = linguagens[lang]
    }

    document.querySelectorAll('.habilidade').forEach(el => {
        const nomeLang = el.getAttribute('data-lang').toLowerCase()

        if (linguagensEmMinusculo[nomeLang]) {
            el.style.backgroundColor = linguagensEmMinusculo[nomeLang].color
        } else {
            el.style.backgroundColor = '#999'
        }
    })
}

carregarCores()
