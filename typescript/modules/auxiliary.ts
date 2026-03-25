// Importa o prompt-sync e as funções de operações
import { somar, diminuir, multiplicar, dividir, expoenciar, radiciar } from './operações'
import promptSync from 'prompt-sync';

const input = promptSync();

// Função para validar o número
export function validarNúmero(frase: string): number {
    while (true) {
        let entrada: string = input(frase);
        let num: number = parseFloat(entrada);

        if (num) {
            return num;
        } else if (entrada == 'quit' || entrada == 'sair') {
            process.exit();
        }
    }
}

// Função para validar a operação
export function validarOperação(frase: string): string {
    const operações: Array<String> = ['+', '-', '*', '/', '**', '//']
    while (true) {
        let operação = input(frase);
        if (operação in operações) {
            return operação
        } else {
            console.log('Essa não é uma operação válida. Tente novamente.\n');
        }
    }
}

// Função para calcular o resultado
export function calcularResultado(operação: string, a: number, b: number): number {
    switch (operação) {
        case '+': return somar(a, b);
        case '-': return diminuir(a, b);
        case '*': return multiplicar(a, b);
        case '/': return dividir(a, b);
        case '**': return expoenciar(a, b);
        case '//': return radiciar(a, b);
        default: throw new Error('Operação Inválida')
    }
}