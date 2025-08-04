//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let amigos = []; // Vetor que vai guardar os nomes

function adicionarAmigo() {
    // Passo 1: Pega o valor digitado no campo de input
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); // .trim() remove espaços extras antes e depois

    // Passo 2: Validação se o campo está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return; // Interrompe a função aqui
    }

    // Passo 3: Validação para permitir apenas letras
    let apenasLetras = /^[A-Za-zÀ-ú\s]+$/;
    if (!apenasLetras.test(nome)) {
        alert("Digite apenas letras.");
        return;
    }

    // Passo 4: Adiciona o nome ao vetor
    amigos.push(nome);

    // Passo 5: Atualiza a lista visual na tela
    atualizarLista();

    // Passo 6: Limpa o campo de input
    input.value = "";
}



