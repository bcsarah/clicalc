require_relative 'modules/auxiliary'

def main
  while true
    system "cls"
    puts "#  CLIcalc Ruby  #\n\n"

    num1 = validarNumero("Primeiro Número: ")
    operacao = validarOperacao("Operação (+, -, *, /, **, //, %): ")
    num2 = validarNumero("Segunda Número: ")

    resultado = calcularResultado(operacao, num1, num2)
    print "\nO resultado é: #{resultado}"
    gets.chomp
  end
end

main