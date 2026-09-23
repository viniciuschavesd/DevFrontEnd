let produtos = [
    { nome: 'Notebook Gamer', preco: 4500.00, categoria: 'Eletrônicos', estoque: 4 },
    { nome: 'Mouse Sem Fio', preco: 120.00, categoria: 'Eletrônicos', estoque: 0 },
    { nome: 'Camisa Polo', preco: 95.00, categoria: 'Roupas', estoque: 15 },
    { nome: 'Calça Jeans', preco: 150.00, categoria: 'Roupas', estoque: 0 },
    { nome: 'Cafeteira Elétrica', preco: 220.00, categoria: 'Eletrodomésticos', estoque: 2 }
];

const inputNome = document.getElementById('inputNome');
const inputPreco = document.getElementById('inputPreco');
const inputCategoria = document.getElementById('inputCategoria');
const inputEstoque = document.getElementById('inputEstoque');
const btnSalvarProduto = document.getElementById('btnSalvarProduto');
const msgFeedbackProd = document.getElementById('msgFeedbackProd');

const listaTodos = document.getElementById('listaTodos');
const filtroCategoria = document.getElementById('filtroCategoria');
const filtroSemEstoque = document.getElementById('filtroSemEstoque');

function formatarPreco(preco) {
    return preco.toLocaleString('pt-PT', { style: 'currency', currency: 'BRL' });
}

function atualizarCategoriasSelect() {
    const valorAtual = filtroCategoria.value;
    const categoriasUnicas = [...new Set(produtos.map(p => p.categoria))];
    filtroCategoria.innerHTML = '<option value="">Todas as categorias</option>';
    
    categoriasUnicas.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        filtroCategoria.appendChild(option);
    });

    if (categoriasUnicas.includes(valorAtual)) {
        filtroCategoria.value = valorAtual;
    }
}

function renderizarLista() {
    listaTodos.innerHTML = '';
    
    const catSelecionada = filtroCategoria.value;
    const apenasSemEstoque = filtroSemEstoque.checked;

    // Mapeamos os produtos junto com o seu índice real no array 'produtos'
    const filtradosComIndice = produtos
        .map((p, index) => ({ produto: p, indexOriginal: index }))
        .filter(item => {
            const matchCat = catSelecionada === '' || item.produto.categoria === catSelecionada;
            const matchEstoque = !apenasSemEstoque || item.produto.estoque === 0;
            return matchCat && matchEstoque;
        });

    if (filtradosComIndice.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'Nenhum produto encontrado com estes filtros.';
        listaTodos.appendChild(li);
        return;
    }

    filtradosComIndice.forEach(({ produto: p, indexOriginal }) => {
        const li = document.createElement('li');
        const badge = p.estoque === 0 ? `<span class="sem-estoque-badge">Sem estoque</span>` : '';
        
        li.innerHTML = `
            <span><strong>${p.nome}</strong> (${p.categoria}) — ${formatarPreco(p.preco)}${badge} (Estq: ${p.estoque})</span>
        `;

        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'Excluir';
        btnExcluir.addEventListener('click', () => {
            removerProduto(indexOriginal);
        });

        li.appendChild(btnExcluir);
        listaTodos.appendChild(li);
    });
}

function removerProduto(indice) {
    produtos.splice(indice, 1);
    atualizarPainel();
}

function atualizarPainel() {
    atualizarCategoriasSelect();
    renderizarLista();
}

btnSalvarProduto.addEventListener('click', () => {
    const nome = inputNome.value.trim();
    const preco = parseFloat(inputPreco.value);
    const categoria = inputCategoria.value.trim();
    const estoque = parseInt(inputEstoque.value);

    if (!nome || isNaN(preco) || !categoria || isNaN(estoque)) {
        msgFeedbackProd.textContent = 'Por favor, preencha todos os campos corretamente.';
        return;
    }

    produtos.push({ nome, preco, categoria, estoque });

    inputNome.value = '';
    inputPreco.value = '';
    inputCategoria.value = '';
    inputEstoque.value = '';

    msgFeedbackProd.textContent = 'Produto cadastrado com sucesso!';
    setTimeout(() => {
        msgFeedbackProd.textContent = '';
    }, 1500);

    atualizarPainel();
});

filtroCategoria.addEventListener('change', renderizarLista);
filtroSemEstoque.addEventListener('change', renderizarLista);

// Inicialização
atualizarPainel();