//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// armazenar os nomes
let nomes = [];


function adicionarAmigo() {
    const inputNome = document.querySelector('#amigo'); // Seleciona o campo de entrada
    const listaAmigos = document.querySelector('#listaAmigos'); // Seleciona a lista de amigos

    const nome = inputNome.value.trim(); // Remove espaços em branco no nome

    if (nome === '') {
        alert('Por favor, insira um nome valido para adicionar a lista.'); // aviso caso tente add um nome "em branco"
        return;
    }

    // Adiciona o nome a lista e limpa o input
    nomes.push(nome);
    inputNome.value = '';

    // Atualiza a lista visual
    const li = document.createElement('li');
    li.textContent = nome; // Define o texto como o nome do amigo
    listaAmigos.appendChild(li);
}


function sortearAmigo() {
    const resultado = document.querySelector('#resultado'); // Seleciona a lista de resultado

    if (nomes.length === 0) {
        alert('Adicione pelo menos um nome antes de sortear.'); // aviso caso não haja nomes
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * nomes.length); // Sorteia um nome aleatório 
    const nomeSorteado = nomes[indiceSorteado];

    // Exibe o nome sorteado na lista de resultado
    const li = document.createElement('li');
    li.textContent = `Amigo sorteado: ${nomeSorteado}`;
    resultado.innerHTML = ''; // Limpa resultados anteriores
    resultado.appendChild(li);
}
