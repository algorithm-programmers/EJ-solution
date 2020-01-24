import java.util.Scanner;

/**
 * study03 소수찾기
 * n의 약수를 구하기 위해 2부터 루트n 까지만 검사하는 방법을 사용한다.
 * i < 루트 n <==> i*i < n
 */
public class study03 {
    public static boolean isPrime(int x){
        if(x < 2){
            return false;
        }
        for (int i = 2; i * i <= x; i++) {
            if(x % i == 0){
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int answer = 0;
        while(n-- > 0){
            if(isPrime(n)){
                answer += 1;
            }
        }
        System.out.println(answer);
    }
}