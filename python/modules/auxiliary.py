# Importa todas as funções de operações
from modules.operacoes import somar, diminuir, multiplicar, dividir, expoenciar, radiciar, restoDivisao


# Função para ver se o número é válido
def validarNumero(frase: str) -> float:
    while True:
        try:
            return float(input(frase).replace(',', '.'))
        except ValueError:
            print('Este não é um número válido. Tente novamente.\n')


# Função para validar, ver se a operação é válida
def validarOperacao(frase: str) -> str:
    operacoes = ['+', '-', '*', '/', '**', '//', '%']
    while True:
        operacao = input(frase).strip()
        if operacao in operacoes:
            return operacao
        else:
            print('Esta não é uma operação válida. Tente novamente.\n')


# Função para calcular o resultado a partir da operação e de dois valores
def calcularResultado(operacao: str, a: float, b: float) -> float:
    match operacao:
        case '+': return somar(a, b)
        case '-': return diminuir(a, b)
        case '*': return multiplicar(a, b)
        case '/': return dividir(a, b)
        case '**': return expoenciar(a, b)
        case '//': return radiciar(a, b)
        case '%': return restoDivisao(a, b)