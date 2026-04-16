const input = document.querySelector(".campo-tarefa");
const ulEle = document.querySelector(".lista-tarefas");
const form = document.querySelector(".formulario");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    listaDeTarefas();
})

function listaDeTarefas() {
    let novaTarefa = input.value;
    const liEl = document.createElement("li");
    liEl.innerText = novaTarefa;
    ulEle.appendChild(liEl);
    input.value = ""
}


