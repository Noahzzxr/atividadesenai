// Captura as referências diretas dos elementos HTML na interface
const form = document.getElementById('cadastroForm');
const listaDados = document.getElementById('listaDados');
const btnLimpar = document.getElementById('btnLimpar');

// Intercepta a tentativa nativa de envio do formulário
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o comportamento padrão de reload da página

    // Captura dos valores inseridos pelo usuário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    // Estruturação do objeto que encapsula o dado respectivo
    const contato = { nome, email };

    // Recupera dados já existentes no localStorage, ou cria um novo Array caso não existam
    const contatosSalvos = JSON.parse(localStorage.getItem('contatos')) || [];

    // Adiciona o novo contato ao arranjo na memória volátil do script
    contatosSalvos.push(contato);

    // Salva o array atualizado de volta no localStorage (convertido em string JSON necessária)
    localStorage.setItem('contatos', JSON.stringify(contatosSalvos));

    // Despeja/Limpa os dados temporários do visual do formulário na tela
    form.reset();

    // Aciona imediatamente a renderização para refletir a nova inserção na visualização
    renderizarDados();
});

// Ação de leitura: Extrair os dados do localStorage e renderizar no DOM
function renderizarDados() {
    listaDados.innerHTML = ''; // Esvazia a lista na tela para não duplicarmos itens a cada render
    
    // Processo inverso, leitura da string JSON para o formato de array padrão JS
    const contatosSalvos = JSON.parse(localStorage.getItem('contatos')) || [];

    // Iteração para criação condicional respectiva dos componentes do HTML em tela
    contatosSalvos.forEach((contato) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>Nome:</strong> ${contato.nome} <br> <strong>E-mail:</strong> ${contato.email}`;
        listaDados.appendChild(li);
    });
}

// Evento que demonstra o descarte dos dados de armazenamento de um nó específico
btnLimpar.addEventListener('click', function() {
    localStorage.removeItem('contatos'); // Expugna a chave inteira do cache
    renderizarDados(); // Atualiza a renderização de interface, deixando-a vazia
});

// Ao inicializar o documento a primeira vez, evoque a renderização para recuperar dados da última sessão
renderizarDados();
