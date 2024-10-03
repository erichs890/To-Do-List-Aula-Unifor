const botaoAdd = document.querySelector("#addButton")
const divTarefas = document.querySelector('#tarefas')
botaoAdd.addEventListener('click',()=>{
    const tarefas = document.querySelector("#addInput").value
    const checkbox = document.createElement('button')
    checkbox.textContent="Concluir"
    checkbox.classList = "concluirBtn"
    
    let checado = false
    const liTarefa = document.createElement('li')
    const p = document.createElement("p")
    p.textContent = tarefas
    checkbox.addEventListener('click', ()=>{
        if(checado == false){

            p.style.textDecoration = "line-through"
            p.style.color = "grey"
            checado = true
        }
        else{
            p.style.textDecoration = "none"
            p.style.color = "black"
            checado = false
        }
    })

    const botaoRemover = document.createElement('button')
    botaoRemover.textContent="Remover tarefa"
    botaoRemover.classList = "botaoRemover"
    botaoRemover.addEventListener('click', ()=>{
        divTarefas.removeChild(liTarefa)
    })
    liTarefa.appendChild(p)
    liTarefa.appendChild(checkbox)
    liTarefa.appendChild(botaoRemover)
    divTarefas.appendChild(liTarefa)

    document.querySelector("#addInput").value = "";
})
