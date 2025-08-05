//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.


let amigos = []; // Vetor que vai guardar os nomes

function adicionarAmigo() {
    // Pega o valor digitado no campo de input
    let input = document.getElementById("amigo");
    // .trim() remove espaços extras antes e depois caso tenha
    let nome = input.value.trim(); 

    // Validação se o campo está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return; // Interrompe a função
    }

    // Validação para permitir apenas letras
    // Permitir apenas letras (maiúsculas e minúsculas), incluindo acentos e espaços.
    // ^  → início da string
    // [A-Za-zÀ-ú\s] → conjunto de caracteres permitidos:
    //    - A-Z: letras maiúsculas
    //    - a-z: letras minúsculas
    //    - À-ú: letras com acentuação comum em idiomas latinos (ex: á, é, õ, ç, etc.)
    //    - \s: espaço em branco
    // +  → indica que deve haver pelo menos um ou mais desses caracteres
    // $  → fim da string
    let apenasLetras = /^[A-Za-zÀ-ú\s]+$/;
    if (!apenasLetras.test(nome)) {
        alert("Digite apenas letras.");
        return;
    }

    // Adiciona o nome ao vetor
    amigos.push(nome);

    // Atualiza a lista visual na tela
    atualizarLista();

    // Limpa o campo de input
    input.value = "";
}

// Função auxiliar para atualizar a lista na tela
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");

    // Limpa o conteúdo anterior da lista para não duplicar
    lista.innerHTML = "";

    // Adiciona cada nome como um <li> na <ul>
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    // Verifica se há amigos na lista
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione pelo menos um nome.");
        return;
    }

    // Gera um índice aleatório baseado no tamanho do array
    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado
    let amigoSorteado = amigos[indiceSorteado];

    // Exibe o nome sorteado na tela
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Amigo sorteado foi o(a): <strong>${amigoSorteado}</strong>`;
}
