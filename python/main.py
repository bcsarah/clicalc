# Importa todas as funções do arquivo modules/auxiliary e duas funções de os
from modules.auxiliary import validarNumero, validarOperaçao, calcularResultado
from os import system, name


# MAIN
def main() -> None:
    # O loop permite vários cálculos
    while True:
        # Limpa a tela com base no sistema operacional
        system('cls' if name == 'nt' else 'clear')
        print('#  CLIcalc Py  #')

        # Define as variáveis para os cálculos
        num1 = validarNumero("Primeiro número: ")
        operacao = validarOperaçao("Operação (+, -, *, /, **, //, %): ")
        num2 = validarNumero("Segundo número: ")

        # Cálculo
        resultado = calcularResultado(operacao, num1, num2)
        input(f'\nO resultado é: {resultado}')


# Se o nome do arquivo for main, roda.
# Ele também trata o erro que dá ao parar a execução com ctrl + c
if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        pass