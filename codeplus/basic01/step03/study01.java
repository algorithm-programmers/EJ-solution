import java.util.Scanner;

/**
 * study01 최대공약수와 최소공배수
 * 유클리드 호제법 사용
 */
public class study01 {
    // 최대공약수 구하기 - 재귀함수 호출
    public static int gcd(int x, int y){
        if(y == 0){
            return x;
        }else{
            return gcd(y, x % y);
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int g = gcd(a, b);  // 최대공약수
        int l = a * b / g;  // 최소공배수
        System.out.println(g + " " + l);
    }
}