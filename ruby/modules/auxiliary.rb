require_relative 'operacoes'

# Função p/ validar um número, com base num input
def validarNumero(frase)
  while true
    print frase
    entrada = gets.chomp.to_f

    if entrada != 0.0
      return entrada
    else
      puts "Este não é um número válido. Tente novamente.\n\n"
    end
  end
end


# Função p/ validar operação, caso for válida, com um input
def validarOperacao(frase)
  operacoes = ['+', '-', '*', '/', '**', '//', '%']
  while true
    print frase
    operacao = gets.chomp

    if operacoes.include?(operacao)
      return operacao
    else
      puts "Esta não é uma operação válida. Tente novamente.\n\n"
    end
  end
end


# Função p/ calcular resultado a partir da operação e dois números
def calcularResultado(operacao, a, b)
  case operacao
    when "+" 
      return somar(a, b)
    when "-"
      return diminuir(a, b)
    when "*"
      return multiplicar(a, b)
    when "/"
      return dividir(a, b)
    when "**"
      return expoenciar(a, b)
    when "//"
      return radiciar(a, b)
    when "%"
      return restoDivisao(a, b)
  end
end