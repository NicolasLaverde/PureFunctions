function printMessage(type, styles) {
    return function printMessageWithStyles(str) {
        console.log(`%c${type}: ${str}`, styles)
    }
}

const printError = printMessage('Error', 'background: red; color: white')
const printWarning = printMessage('Warning', 'background: orange; color: white')
const printSuccess = printMessage('Success', 'background: green; color: white')
const printInfo = printMessage('Info', 'background: blue; color: white')

printError('Este es un error')
