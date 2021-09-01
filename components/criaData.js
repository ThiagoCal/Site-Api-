import { Tarefa } from "./criaTarefa.js";

export const criaData = (data) =>{
    let dataTopo = document.createElement("li");
    let content = `<p class = "content-data">${data.format("DD/MM/YYYY")}</p>`;

    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

    dataTopo.innerHTML = content;

    tarefas.forEach((task =>{
        let dia = moment(task.dataFormatada, "DD/MM/YYYY");

        let diff = data.diff(dia)
        if(diff === 0){
            dataTopo.appendChild(Tarefa(task));
        }
    }))

    return dataTopo;
}