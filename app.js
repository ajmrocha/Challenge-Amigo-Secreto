// Lista para armazenar os amigos
let listaDeAmigos = [];

// Elementos do DOM
const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// Função para adicionar amigo
function adicionarAmigo() {
    const nome = inputAmigo.value.trim();
    
    // Validação do input
    if (nome === '') {
        alert('Por favor, insira um nome válido!');
        return;
    }
    
    // Verifica se o nome já existe na lista
    if (listaDeAmigos.includes(nome)) {
        alert('Este nome já foi adicionado!');
        return;
    }
    
    // Adiciona o nome à lista
    listaDeAmigos.push(nome);
    
    // Limpa o input
    inputAmigo.value = '';
    
    // Atualiza a lista visual
    atualizarListaVisual();
    
    // Limpa o resultado anterior quando adicionar novo amigo
    resultado.innerHTML = '';
    
    // Foca no input para facilitar a próxima entrada
    inputAmigo.focus();
}

// Função para atualizar a lista visual
function atualizarListaVisual() {
    // Limpa a lista atual
    listaAmigos.innerHTML = '';
    
    // Adiciona cada amigo como um item da lista
    listaDeAmigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.style.display = 'flex';
        li.style.alignItems = 'center';
        li.style.justifyContent = 'space-between';
        li.style.backgroundColor = 'white';
        li.style.padding = '10px 20px';
        li.style.margin = '10px 0';
        li.style.borderRadius = '25px';
        li.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        li.style.width = '100%';
        li.style.maxWidth = '500px';
        
        // Cria o texto do nome
        const nomeSpan = document.createElement('span');
        nomeSpan.textContent = amigo;
        nomeSpan.style.flex = '1';
        
        // Cria o botão de remover
        const btnRemover = document.createElement('button');
        btnRemover.textContent = '✕';
        btnRemover.style.backgroundColor = 'var(--color-tertiary)';
        btnRemover.style.color = 'var(--color-text)';
        btnRemover.style.border = 'none';
        btnRemover.style.borderRadius = '50%';
        btnRemover.style.width = '30px';
        btnRemover.style.height = '30px';
        btnRemover.style.display = 'flex';
        btnRemover.style.alignItems = 'center';
        btnRemover.style.justifyContent = 'center';
        btnRemover.style.cursor = 'pointer';
        btnRemover.style.marginLeft = '10px';
        btnRemover.style.padding = '0';
        btnRemover.style.fontSize = '14px';
        
        // Adiciona hover effect
        btnRemover.onmouseover = () => {
            btnRemover.style.backgroundColor = '#a1a1a1';
        };
        btnRemover.onmouseout = () => {
            btnRemover.style.backgroundColor = 'var(--color-tertiary)';
        };
        
        btnRemover.onclick = () => removerAmigo(index);
        
        // Adiciona os elementos ao li
        li.appendChild(nomeSpan);
        li.appendChild(btnRemover);
        
        // Adiciona o li à lista
        listaAmigos.appendChild(li);
    });
}

// Função para remover amigo
function removerAmigo(index) {
    listaDeAmigos.splice(index, 1);
    atualizarListaVisual();
    // Limpa o resultado quando remover um amigo
    resultado.innerHTML = '';
}

// Função para sortear amigo
function sortearAmigo() {
    // Verifica se há amigos suficientes
    if (listaDeAmigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para realizar o sorteio!');
        return;
    }
    
    // Limpa o resultado anterior
    resultado.innerHTML = '';
    
    // Realiza o sorteio
    const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSorteado = listaDeAmigos[indiceSorteado];
    
    // Cria o elemento de resultado
    const li = document.createElement('li');
    li.textContent = `Amigo sorteado: ${amigoSorteado}`;
    
    // Adiciona o resultado à lista
    resultado.appendChild(li);
}

// Adiciona evento de tecla Enter no input
inputAmigo.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
});