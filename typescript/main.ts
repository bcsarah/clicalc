// Importa o prompt-sync e as funções de modules/auxiliary
import { validarNumero, validarOperacao, calcularResultado } from './modules/auxiliary.js';
import promptSync from 'prompt-sync';

const input = promptSync();


// Main
function main(): void {
  // O loop permite vários cálculos
  while (true) {
    console.clear();
    console.log('#  CLIcalc TS  #');
    console.log('Digite "quit" ou "sair" para sair\n')

    // Define as variáveis para os cálculos
    let num1: number = validarNumero('Primeiro número: ');
    let operacao: string = validarOperacao('Operação (+, -, *, /, **, //, %): ');
    let num2: number = validarNumero('Segundo número: ');

    // Cálculo
    let resultado: number = calcularResultado(operacao, num1, num2);
    input(`\nO resultado é: ${resultado}`);
  }
}

main();
