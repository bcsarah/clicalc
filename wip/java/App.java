import modules.Auxiliary;
import java.util.Scanner;

public class App {
    static Scanner scan = new Scanner(System.in);

    public static void main(String[] args) throws Exception {
        while (true) {
            Auxiliary.clearScreen();
            System.out.println("#  CLIcalc Java  #");

            // Define as variáveis para os cálculos
            Double num1 = Auxiliary.validarNumero("Primeiro número: ");
            String operacao = Auxiliary.validarOperacao("Operação (+, -, *, /, **, //, %): ");
            Double num2 = Auxiliary.validarNumero("Segundo número: ");

            // Cálculo
            Double resultado = Auxiliary.calcularResultado(operacao, num1, num2);
            System.out.println("\nO resultado é: " + resultado);
            scan.next();
        }
    }
}