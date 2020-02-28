import java.util.Scanner;

/**
 * study02
 */
public class study02 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        char[][] arr = new char[n][n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.next().toCharArray();   // ['Y', 'C', 'P', 'Z', 'Y']
        }
        
    }
}