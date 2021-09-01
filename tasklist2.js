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

// const createTask = (event) =>{
//     event.preventDefault();
//     const list = document.querySelector('[data-list]');
//     const input = document.querySelector('[data-form-input]');
//     const inputValue = input.value;

//     const task = document.createElement('li');
//     task.classList.add('task');

//     const content = `<p class="content">${inputValue}</p>`;

//     task.innerHTML(content);

//     list.appendChild(task);

//     inputValue = " ";

// }
// const newTask = document.querySelector('[form-button]');
// newTask.addEventListener('click', createTask)
/*--------------------------------------------*/

const criarTarefa = () =>{

    const list = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const task = document.createElement('li')
    task.classList.add('list')

    const conteudo = `<p class="content">${valor}</p>`

    task.innerHTML(content)
    list.appendChild(task)
    input.value(" ");

};

const butao = document.querySelector('[data-form-btn]')

butao.addEventListener('click', criarTarefa);

const buttonConclude = ( ) => {
    const btnConclude = document.createElement('button')

    btnConclude = classList.add('check-button');
    btnConclude.innerText("Concluir")

    btnConclude.addEventListener("click", concludeTask)
    return btnConclude;

}


const concludeTask = (event) => {
    const btnConclude = event.target;
    const completeTask = btnConclude.parentElement

    completeTask.classList.toggle("complete")
}







