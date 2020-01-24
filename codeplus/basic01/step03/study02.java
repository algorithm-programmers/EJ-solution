import java.util.Scanner;

/**
 * study02 최소공배수
 */
public class study02 {
    public static int gcd(int a, int b){
        while(b != 0){
            int r = a % b;
            a = b;
            b = r;
        }
        return a;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        while(n-- > 0){
            int a = sc.nextInt();
            int b = sc.nextInt();
            int g = gcd(a, b);
            int l = a * b / g;
            System.out.println(l);
        }
    }
}