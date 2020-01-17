import java.util.Scanner;

/**
 * study02
 * 입력 개수가 정해지지 않을 경우의 입력 받기
 */
public class study02 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a, b;
        while(sc.hasNextInt()){
            a = sc.nextInt();
            b = sc.nextInt();
            System.out.println(a + b);
        }
    }
}