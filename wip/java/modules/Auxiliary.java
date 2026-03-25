import java.util.Scanner;
import 
package modules;

public class Auxiliary {
    static Scanner scan = new Scanner(System.in);
    
    public static String perguntar(String prompt) {
        System.out.print(prompt);
        return scan.next();
    }

    public static double perguntarDouble(String prompt) {
        System.out.print(prompt);
        return scan.nextDouble();
    }
    public static double validarNúmero(String prompt) {
        return 1;
    }
}