// Importa o prompt-sync e as funções de operações
import { somar, diminuir, multiplicar, dividir, expoenciar, radiciar, restoDivisao } from './operacoes.js'
import promptSync from 'prompt-sync';

const input = promptSync();


// Função para validar o número
export function validarNumero(frase: string): number {
    while (true) {
        let entrada: string = input(frase);
        let num: number = parseFloat(entrada);

        if (num) {
            return num;
        } else if (entrada == 'quit' || entrada == 'sair') {
            process.exit();
        } else {
            console.log('Este não é um número válido. Tente novamente.\n');
        }
    }
}


// Função para validar a operação
export function validarOperacao(frase: string): string {
    const operacoes: Array<String> = ['+', '-', '*', '/', '**', '//', '%'];

    while (true) {
        let operacao = input(frase);
        if (operacoes.includes(operacao)) {
            return operacao
        } else if (operacao == 'quit' || operacao == 'sair') {
            process.exit();
        } else {
            console.log('Essa não é uma operação válida. Tente novamente.\n');
        }
    }
}


// Função para calcular o resultado
export function calcularResultado(operacao: string, a: number, b: number): number {
    switch (operacao) {
        case '+': return somar(a, b);
        case '-': return diminuir(a, b);
        case '*': return multiplicar(a, b);
        case '/': return dividir(a, b);
        case '**': return expoenciar(a, b);
        case '//': return radiciar(a, b);
        case '%': return restoDivisao(a, b);
        default: throw new Error('Operação Inválida');
    }
}