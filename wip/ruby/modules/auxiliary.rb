# Função p/ validar um número, com base num input
def validarNumero(frase)
  while true
    puts frase
    entrada = gets.chomp
    entradaFloat = entrada.to_f

    if entradaFloat != 0.0
      return entradaFloat
    else
      puts "Este não é um número válido. Tente novamente.\n"
    end
  end
end


# Função p/ validar operação, caso for válida, com um input
def validarOperacao(frase)
  operacoes = ['+', '-', '*', '/', '**', '//', '%']
  while true
    puts frase
    operacao = gets.chomp

    if operacao in operacoes
      return operacao
    else
      puts "Esta não é uma operação válida. Tente novamente.\n"
    end
  end
end


# Função p/ calcular resultado a partir da operação e dois números
def calcularResultado(operacao, a, b)

end

sla = validarNumero('digite um number')
puts sla