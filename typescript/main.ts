// Importa o prompt-sync e as funções de modules/auxiliary
import { validarNúmero, validarOperação, calcularResultado } from './modules/auxiliary';
import promptSync from 'prompt-sync';

const input = promptSync();


// Main
function main(): void {
    // O loop permite vários cálculos
    while (true) {
        console.clear();
        console.log('#  CLIcalc TS  #');
        console.log('Digite quit ou sair para sair\n')

        // Define as variáveis para os cálculos
        let num1: number = validarNúmero('Primeiro número: ');
        let operação: string = validarOperação('Operação (+, -, *, /, **, //): ');
        let num2: number = validarNúmero('Segundo número: ');

        // Cálculo
        let resultado: number = calcularResultado(operação, num1, num2);
        input(`\nO resultado é: ${resultado}`);
    }
}

main();