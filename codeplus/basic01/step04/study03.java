import java.util.Scanner;

/**
 * study03 1, 2, 3 더하기
 * https://www.acmicpc.net/problem/9095
 * d[n] = d[n-1] + d[n-2] + d[n-3]
 */
public class study03 {
    public static int numOfCase(int n){
        int[] d = new int[11];  //  주어진 정수 n은 양의 정수이며 11보다 작다.
        d[0] = 1;   // 나타낼 수 없는 경우의 수 1가지.
        for (int i = 1; i <= 10; i++) {
            if(i-1 >= 0){
                d[i] += d[i-1];
            }
            if(i-2 >= 0){
                d[i] += d[i-2];
            }
            if(i-3 >= 0){
                d[i] += d[i-3];
            }
        }
        return d[n];
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        while(n-- > 0){
            int m = sc.nextInt();
            System.out.println(numOfCase(m));
        }
    }
}