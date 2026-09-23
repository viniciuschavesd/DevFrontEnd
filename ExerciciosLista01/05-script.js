// Array para guardar as tarefas
let tarefas = [];

// Seleção de elementos DOM (corrigido para coincidir com o HTML)
const btnAddTarefa = document.getElementById("btnAddTarefa");
const btnListarTarefas = document.getElementById("btnListarTarefas");
const txtTarefa = document.getElementById("txtTarefa");
const btnAdd = document.getElementById("btnAdd");
const msgFeedback = document.getElementById("msgFeedback");
const secAdd = document.getElementById("secAdd");
const secList = document.getElementById("secList");
const listar = document.getElementById("listar");

btnListarTarefas.addEventListener("click", () => {
    secList.classList.remove("hidden");
    secAdd.classList.add("hidden");
    listarTarefas();
});

function adicionarTarefa() {
    const tarefa = txtTarefa.value.trim();

    if (tarefa === "") {
        msgFeedback.textContent = "Por favor, digite uma tarefa.";
        return;
    }

    // Adiciona a tarefa ao array
    tarefas.push(tarefa);

    // Limpa o campo de entrada correto (txtTarefa)
    txtTarefa.value = "";

    msgFeedback.textContent = "Tarefa adicionada com sucesso!";
    setTimeout(() => {
        msgFeedback.textContent = "";
    }, 1300);
}

function listarTarefas() {
    // Limpa a lista antes de exibir
    listar.innerHTML = "";

    if (tarefas.length === 0) {
        const li = document.createElement("li");
        li.textContent = "Nenhuma tarefa cadastrada.";
        listar.appendChild(li);
        return;
    }

    tarefas.forEach((tarefa, indice) => {
        const li = document.createElement("li");
        li.textContent = tarefa + ' ';

        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.addEventListener("click", () => {
            removerTarefa(indice);
        });

        li.appendChild(btnExcluir);
        listar.appendChild(li);
    });
}

function removerTarefa(indice) {
    tarefas.splice(indice, 1);
    listarTarefas();
}

function limparFeedback() {
    msgFeedback.textContent = "";
}

// Evento do botão salvar (ID real: btnAdd)
btnAdd.addEventListener("click", adicionarTarefa);