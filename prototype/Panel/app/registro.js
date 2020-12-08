import { roles, name, lastname, address, academic, email, age, tel, birth, pass, passConfirm, createUser } from './selectores.js';
import { GUI } from './clases.js';


const mensajes = new GUI();

function eventos() {

    createUser.addEventListener('click', validar);
    tel.addEventListener('keypress', suprimirLetras);
    age.addEventListener('keypress', suprimirLetras);


    const noPaste = [tel, age];

    noPaste.forEach(input => input.addEventListener('paste', e => e.preventDefault()));


}


eventos();


function validar() {


    const info = {

        nombre: name.value,
        apellido: lastname.value,
        direccion: address.value,
        educacion: academic.value,
        correo: email.value,
        edad: age.value,
        telefono: tel.value,
        nacimiento: birth.value,
        contraseña: pass.value,
        contraseñaConfirm: passConfirm.value

    }


    if (!verificar(info) || Number(roles.value) === 0) {


        const check = document.querySelector('.alerta-danger');

        if (check) {

            check.remove();

        }


        mensajes.imprimirAlerta('Todos los campos son obligatorios', 'error');
        return;

    }

    validarTexto();


}

function verificar(objeto) {
    return Object.values(objeto).every(input => input !== '');

}

function validarTexto() {

    const regLetras = /^[a-z]+$/i;

    if (!regLetras.test(name.value) || !regLetras.test(lastname.value)) {

        const check = document.querySelector('.alerta-danger');

        if (check) {

            check.remove();

        }

        mensajes.imprimirAlerta('Los campos nombre y apellidos no admiten numeros', 'error');
        return;

    }

    validarLongitud();

}


function validarLongitud() {

    const telLenght = tel.value;
    const edadLength = age.value;

    if (telLenght.length > 8 || edadLength.length > 2) {

        const check = document.querySelector('.alerta-danger');

        if (check) {

            check.remove();

        }
        mensajes.imprimirAlerta('Telefono debe ser de máximo 8 carácteres y edad de máximo 2 caracteres', 'error');

        return;

    }




}


function suprimirLetras(e) {

    const charCode = e.charCode;

    const validos = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];

    const verificar = validos.some(numero => numero === charCode);

    if (!verificar) {

        e.preventDefault();

    }


}