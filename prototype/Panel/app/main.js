import { imagenProyecto, edit, agregarActivo, modal, modalBtn, footerText, fecha, module, linkModule } from './selectores.js';

footerText.innerHTML = `${fecha.getFullYear()} - TicoPlayGround &copy`;


function eventos() {

    module[0].addEventListener('click', main);
    module[1].addEventListener('click', proyectos);
    module[2].addEventListener('click', clientes);
    module[3].addEventListener('click', personal);
    module[4].addEventListener('click', inventario);
    module[5].addEventListener('click', cotizaciones);
    module[6].addEventListener('click', gastos);
    module[7].addEventListener('click', ingresos);
    module[8].addEventListener('click', usuarios);
    modalBtn[0].addEventListener('click', quitarModalRegistro);
    modalBtn[1].addEventListener('click', quitarModalEdicion);
    agregarActivo.addEventListener('click', mostrarModalRegistro);
    edit.forEach(editBtn => editBtn.addEventListener('click', mostrarModalEdicion));



}

eventos();


function proyectos() {



    window.location.href = 'proyectos.html';


}

function clientes() {

    window.location.href = 'clientes.html';

}

function inventario() {

    window.location.href = 'inventario.html';
}


function personal() {

    window.location.href = 'personal.html';

}

function gastos() {

    window.location.href = 'gastos.html';
}

function ingresos() {

    window.location.href = 'ingresos.html';

}

function usuarios() {

    window.location.href = 'usuarios.html';

}


function cotizaciones() {


    window.location.href = 'cotizaciones.html';
}

function main() {

    window.location.href = 'main.html';
}





function mostrarModalRegistro() {

    modal[0].classList.add('modal-open');

}

function quitarModalRegistro() {

    modal[0].classList.remove('modal-open');



}

function mostrarModalEdicion() {
    modal[1].classList.add('modal-open');

}

function quitarModalEdicion() {

    modal[1].classList.remove('modal-open');


}