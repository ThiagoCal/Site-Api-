const criarTarefa = function(event){
    event.preventDefault();
    let input = document.querySelector("[data-form-input]");
    let inputV = input.value;
    let list = document.querySelector("[data-list]")


    let task = document.createElement('li');
    task.classList.add("list");

    let content = `<p class = "content>${inputV}</p>`

    task.innerHTML(content);
    list.appendChild(task);
}

const btnTarefa = document.querySelector("[data-form-btn]")
btnTarefa.addEventListener("click", criarTarefa);