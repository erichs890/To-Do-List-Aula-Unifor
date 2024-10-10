const botaoAdd = document.querySelector("#addButton")
const divTarefas = document.querySelector('#tarefas')
const tarefasList = JSON.parse(localStorage.getItem("tarefaList")) || []
botaoAdd.addEventListener('click',()=>{
    criarTarefa()
})
function mostrarTarefas() {

    tarefasList.forEach((tarefaDaVez) => {
        const liTarefa = document.createElement('li')
        const p = document.createElement("p")
        p.textContent = tarefaDaVez

        const concluir = document.createElement('button')
        concluir.textContent = "Concluir"
        concluir.classList = "concluirBtn"
        
        let checado = false
        concluir.addEventListener('click', () => {
            if (!checado) {
                p.style.textDecoration = "line-through"
                p.style.color = "grey"
                checado = true
            } else {
                p.style.textDecoration = "none"
                p.style.color = "black"
                checado = false
            }
        })

        const botaoRemover = document.createElement('button')
        botaoRemover.textContent = "Remover tarefa"
        botaoRemover.classList = "botaoRemover"
        botaoRemover.addEventListener('click', () => {
            divTarefas.removeChild(liTarefa)
            const index = tarefasList.indexOf(tarefaDaVez)
            if (index > -1) {
                tarefasList.splice(index, 1)
                localStorage.setItem("tarefaList", JSON.stringify(tarefasList))
            }
        })

        liTarefa.appendChild(p)
        liTarefa.appendChild(concluir)
        liTarefa.appendChild(botaoRemover)
        divTarefas.appendChild(liTarefa)
    })
}
function criarTarefa(){
    const tarefas = document.querySelector("#addInput").value

    if(tarefas == ""){
        addInput.classList.add('erro')
        alert("Por favor, insira uma tarefa.")
        return
    }else {
        addInput.classList.remove('erro') 
    }
    const concluir = document.createElement('button')
    concluir.textContent="Concluir"
    concluir.classList = "concluirBtn"
    
    let checado = false
    const liTarefa = document.createElement('li')
    const p = document.createElement("p")
    p.textContent = tarefas
    concluir.addEventListener('click', ()=>{
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
        tarefasList.pop(tarefas)
    })
    tarefasList.push(tarefas)
    localStorage.setItem("tarefaList",JSON.stringify(tarefasList))
    liTarefa.appendChild(p)
    liTarefa.appendChild(concluir)
    liTarefa.appendChild(botaoRemover)
    divTarefas.appendChild(liTarefa)
    

    document.querySelector("#addInput").value = ""
}
mostrarTarefas()