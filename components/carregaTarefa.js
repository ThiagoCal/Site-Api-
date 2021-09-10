import { criaData } from "./criaData.js";


export const carregaTarefa = () =>{
    let lista = document.querySelector("[data-list]");
    let tarefasCadastradas = JSON.parse(localStorage.getItem("tarefas")) || [];

    lista.innerHTML = " "; //para limpar a lista e não carregar novamente;
    tarefasCadastradas.forEach((task)=>{
        let dia = moment(task.dataFormatada, "DD/MM/YYYY");

        lista.appendChild(criaData(dia))
    })
}