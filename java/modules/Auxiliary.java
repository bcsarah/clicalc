package modules;
import java.util.Scanner;
import java.util.ArrayList;
import java.util.List;


// Métodos Auxiliares
public class Auxiliary {
    static Scanner scan = new Scanner(System.in);
    
    // Método para limpar o console
    public static void clearScreen() {  
        System.out.print("\033[H\033[2J");
        System.out.flush();
    }  

    // Métodos para perguntar, retornando String ou Double
    public static String perguntar(String frase) {
        System.out.print(frase);
        return scan.nextLine();
    }

    public static double perguntarDouble(String frase) {
        System.out.print(frase);
        String entrada = scan.nextLine();
        return Double.parseDouble(entrada);
    }


    // Método para validar número a partir de uma pergunta
    public static double validarNumero(String frase) {
        while (true) {
            String entrada = perguntar(frase);

            try {
                return Double.parseDouble(entrada);
            } catch ( Exception e ) {
                System.out.println("Este não é um número válido. Tente novamente.\n");
                continue;
            }
        }
    }


    // Método para validar a operação
    public static String validarOperacao(String frase) {
        ArrayList<String> operacoes = new ArrayList<>(List.of("+", "-", "*", "/", "**", "//", "%"));

        while (true) {
            String operacao = perguntar(frase);
            if (operacoes.contains(operacao)) {
                return operacao;
            } else {
                System.out.println("Essa não é uma operação válida. Tente novamente.\n");
            }
        }
    }


    // Método para calcular o resultado com base nas operações
    public static Double calcularResultado(String operacao, Double a, Double b) {
        switch (operacao) {
            case "+": return Operacoes.somar(a, b);
            case "-": return Operacoes.diminuir(a, b);
            case "*": return Operacoes.multiplicar(a, b);
            case "/": return Operacoes.dividir(a, b);
            case "**": return Operacoes.expoenciar(a, b);
            case "//": return Operacoes.radiciar(a, b);
            case "%": return Operacoes.restoDivisao(a, b);
            default: throw new Error("Operação inválida!");
        }
    }
}