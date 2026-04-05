// Main
public class App {
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
            System.out.print("\nO resultado é: " + resultado);
            Auxiliary.scan.nextLine();
        }
    }
}
