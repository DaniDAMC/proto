import { entrarBtn, inputLogin, login, loginContainer } from './selectores.js';
import { GUI } from './clases.js';

const mensajes = new GUI();


function eventos() {

    entrarBtn.addEventListener('click', validar);

}

eventos();





function validar() {

    if (inputLogin[0].value === '' || inputLogin[1].value === '') {

        const check = document.querySelector('.alerta-danger');


        if (check) {

            check.remove();

        }


        mensajes.imprimirAlerta('Todos los campos son obligatorios', 'error');

        return;


    }


    window.location.href = 'http://127.0.0.1:5500/Panel/main.html';



}