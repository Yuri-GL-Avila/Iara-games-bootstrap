let bannerBtn = document.getElementById("banner-btn")
let textoExtra = document.getElementById("texto-extra")

let modal = document.getElementById("modal")
let modalTitulo = document.getElementById("modal-titulo")
let botaoAbrir = document.querySelectorAll(".abrir-modal")
let fecharModal = document.querySelector(".fechar-modal")


// texto expansível do banner
bannerBtn.addEventListener("click", () => {
    textoExtra.classList.toggle("expandido")
    
    if (textoExtra.classList.contains("expandido")) {
        bannerBtn.textContent = "Mostrar Menos"
    } else {
        bannerBtn.textContent = "Mostrar Mais"
    }
}
)
// texto expansível do banner

// modais dos cards
botaoAbrir.forEach(botao => {
    botao.addEventListener("click", (event) => {
        event.preventDefault()
        let nomeDoJogo = botao.dataset.jogo
        modalTitulo.textContent = nomeDoJogo
        modal.style.display = "flex"
    })
})

fecharModal.addEventListener("click", () => {
    modal.style.display = "none"
})

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none"
    }
})

// modais dos cards