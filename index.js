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
    input.value = "";
    const btnCheckEl = document.createElement("div")
    btnCheckEl.innerHTML = `<i class="fa-solid fa-check-to-slot"></i>`
    liEl.appendChild(btnCheckEl);
    const btnTrashEl = document.createElement("div")
    btnTrashEl.innerHTML = `<i class="fa-solid fa-trash"></i>`
    liEl.appendChild(btnTrashEl);

    btnCheckEl.addEventListener("click", () => {
        liEl.classList.toggle("checked")
    })

    
}


