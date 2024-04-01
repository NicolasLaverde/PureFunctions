function error(str) {
    console.log(`%cError: ${str}`, 'background: red; color: white')
}

function warning(str) {
    console.log(`%cWarning: ${str}`, 'background: orange; color: white')
}

function exito(str) {
    console.log(`%cExito: ${str}`, 'background: green; color: white')
}

error('Mensaje con error')
warning('Mensaje de alerta')
exito('El mensaje ha sido exitoso')