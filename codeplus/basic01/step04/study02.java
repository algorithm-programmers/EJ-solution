import java.util.Scanner;

/**
 * study02 2 X N 타일링
 * https://www.acmicpc.net/problem/11726
 * 2×n 크기의 직사각형을 1×2, 2×1 타일로 채우는 방법의 수를 구하자.
 */
public class study02 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] d = new int[1001];
        d[0] = 1;   // 놓을 수 없는 1가지 수
        d[1] = 1;   // 2*1 직사각형 한가지만 놓을 수 있음.
        for (int i = 2; i <= n; i++) {
            d[i] = d[i-1] + d[i-2]; // 2*n 크기의 직사각형의 오른쪽에 1*2 두 개 or 2*1 한 개를 놓는 경우의 수가 있다. => 두 개면 n-2 경우의 수, 한 개면 n-1 경우의 수.
            d[i] %= 10007;
        }
        System.out.println(d[n]);
    }
}