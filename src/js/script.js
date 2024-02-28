// Armazenar o texto do campo de entrada em uma variável permitindo apenas caracteres minúsculos e sem acento
function textoDoUsuario() {
    let textoUsuario = document.querySelector("#input").value;
    return textoUsuario.replace(/[^a-zA-Z\s]/g, "").toLowerCase();
}

function criptografar() {
    // // Armazenar o texto do campo de entrada em uma variável
    textoDoUsuario();

    // Criptografar o texto
    function criptografarTexto(textoUsuario) {
        let texto = textoUsuario.replaceAll("e", "enter")
                                .replaceAll("i", "ines")
                                .replaceAll("a", "ai")
                                .replaceAll("o", "ober")
                                .replaceAll("u", "ufat");
        return texto;
    }

    let textoCriptografado = criptografarTexto(textoDoUsuario());
    
    // Apagar texto do campo de entrada 
    limparCampo();

    // Ocultar elementos 
    ocultarElementos();

    // Exibir texto criptografado no campo de saída
    exibirTexto(textoCriptografado);

    // Exibir botão para copiar texto
    exibirBotaoCopiar();
}

// Apagar texto do campo de entrada
function limparCampo() {
    let limparCampo = document.querySelector("#input");
    limparCampo.value = "";
}

// Ocultar elementos 
function ocultarElementos() {
    document.querySelector(".result-content img").style.display = "none";
    document.querySelector(".result-content div").style.display = "none";
}

// Exibir texto no campo de saída
function exibirTexto(textoCriptografado) {
    let campoDeTexto = document.querySelector("#output");
    campoDeTexto.style.display = "block";
    campoDeTexto.innerHTML = textoCriptografado;
}

// Exibir botão para copiar texto
function exibirBotaoCopiar() {
    document.querySelector(".result-content button").style.display = "block";
}



// Copiar texto do campo de saída
function copiar() {
    let copiarTexto = document.querySelector("#output");
    navigator.clipboard.writeText(copiarTexto.innerHTML);
}



function descriptografar() {
    // Armazenar o texto do campo de entrada em uma variável
    textoDoUsuario();

    // Descriptografar o texto
    function descriptografarTexto(textoUsuario) {
        let texto = textoUsuario.replaceAll("enter", "e")
                                .replaceAll("ines", "i")
                                .replaceAll("ai", "a")
                                .replaceAll("ober", "o")
                                .replaceAll("ufat", "u");
        return texto;
    }

    let textoDescriptografado = descriptografarTexto(textoDoUsuario());

    // Apagar campo de entrada
    limparCampo();

    // Ocultar elementos 
    ocultarElementos();

    // Exibir texto descriptografado no campo de saída
    exibirTexto(textoDescriptografado);

    // Exibir botão para copiar texto
    exibirBotaoCopiar();
}