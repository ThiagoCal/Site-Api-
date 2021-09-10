 const buttonConclude = () => {
    const btnConclude = document.createElement('button');

    btnConclude.classList.add('check-button');
    btnConclude.innerText = 'concluir';
    btnConclude.addEventListener('click', (concludeTask));
    return btnConclude;
}

const concludeTask = (event) => {
    const btnConclude = event.target; /*qual o alvo do evento. Saber quem você clicou*//*estrategia de subir um no do dom,
                                                                                        ao colocar o rabisco na li */
    const taskComplete = btnConclude.parentElement;

    taskComplete.classList.toggle('done'); /*devolve um booleano verdadeiro ou falso*/


}

export default buttonConclude