
const buttonRemove = () => {
    const buttonRemove = document.createElement('button');
    buttonRemove.classList.add('delete-button');
    buttonRemove.innerText ='delete';
    buttonRemove.addEventListener('click', removeTask);
    return buttonRemove;
}

const removeTask = (event) =>{
    const buttonDelete = event.target
    const deleteTask = buttonDelete.parentElement
    deleteTask.remove()

    return buttonDelete;
}

export default buttonRemove
