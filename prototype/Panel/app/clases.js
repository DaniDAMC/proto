import { registroContainer, messageContainer } from './selectores.js';


export class GUI {

    imprimirAlerta(mensaje, tipo) {

        if (tipo === 'error') {


            const divAlerta = document.createElement('div');
            const textoAlerta = document.createElement('p');
            textoAlerta.textContent = mensaje;
            divAlerta.classList.add('alerta-danger');
            divAlerta.appendChild(textoAlerta);
            registroContainer.insertBefore(divAlerta, messageContainer);


            setTimeout(() => {

                divAlerta.remove();


            }, 3000);

        }


    }



}