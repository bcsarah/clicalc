# Importa todas as funções de operações
from operações import *


# Função para ver se o número é válido
def validarNúmero(frase: str) -> float:
    while True:
        try:
            return float(input(frase).replace(',', '.'))
        except ValueError:
            print('Este não é um número válido. Tente novamente.\n')


# Função para validar, ver se a operação é válida
def validarOperação(frase: str) -> str:
    operações = ['+', '-', '*', '/', '**', '//']
    while True:
        operação = input(frase).strip()
        if operação in operações:
            return operação
        else:
            print('Este não é uma operação válida. Tente novamente.\n')


# Função para calcular o resultado a partir da operação e de dois valores
def calcularResultado(operação: str, a: float, b: float) -> float:
    match operação:
        case '+':
            return somar(a, b)
        case '-':
            return diminuir(a, b)
        case '*':
            return multiplicar(a, b)
        case '/':
            return dividir(a, b)
        case '**':
            return expoenciar(a, b)
        case '//':
            return radiciar(a, b)