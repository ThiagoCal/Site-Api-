import { carregaTarefa } from './carregaTarefa.js';
import buttonConclude from './concludeTask.js';
import buttonRemove  from './deleteTask.js';
    
export const handleNovoItem = (event) =>{
        event.preventDefault();

       /* const list = document.querySelector('[data-list]'); /*busca o elemento list*/
        const input = document.querySelector('[data-form-input]'); /*busca o elemento do input*/
        const value = input.value; /*pega o valor do input*/
        
        const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

        const calendario = document.querySelector('[data-form-date]')
        const data = moment(calendario.value)
    
        const dataFormatada = data.format('DD/MM/YYYY')

        const dados = {
            value,
            dataFormatada
        }
        const tarefasAtualizadas = [... tarefas, dados]

        /*const criaTarefa = Tarefa(dados);
        list.appendChild(criaTarefa)*/

        localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas))
        input.value = " ";

        carregaTarefa(); //atualiza as tarefas
    }


export const Tarefa = ({value, dataFormatada}) => {
        const task = document.createElement('li')
        task.classList.add('task')

        const content = `<p class="content">${dataFormatada} * ${value}</p>` /*insere o inputValue como uma nova task*/

        task.innerHTML = content; /*acessa o valor a li e coloca o conteudo de p dentro dele no html*/

        task.appendChild(buttonConclude())
        task.appendChild(buttonRemove())
        
        return task;
    }
    



    


    


/*primeiro se cria uma função para a criação de uma tarefa e ela recebe um event como parametro
2- event.preventDefault() para evitar o carregamento da pagina após inserir uma tarefa
3- criar uma variavel list , com base no data attribute da lista
4- criar uma variavel input, com base no data attribute do input
5- cria uma variavel com o valor da variavel input
6- cria uma variavel tarefa que ira criar uma novo elemento li
7- adiciona uma classe para a tarefa criada
8- cria uma variavel com o conteudo, o valor pego do input value e transforma em html
9- transforma o conteudo em html
10- adiciona uma tarefa como uma nova li
11 - passa um valor de string vazia toda vez que concluir a função para limpar o campo de input

12 - cria uma variavel para inserir a nova tarefa utilizando o data attribute do butao
13- cria um listener do evento criado para inserir a nova tarefa com os parametros click e a funcao para criar a nova tarefa
*/

