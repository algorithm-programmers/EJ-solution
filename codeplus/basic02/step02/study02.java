import java.util.Scanner;

/**
 * study02 N과 M (2)
 * https://www.acmicpc.net/problem/15650
 * (1)과 같은데, '오름차순'이란 조건이 추가된다.
 */
public class study02 {
    static int[] a = new int[10];
    // start ~ n 에서 구할 것
    static void go(int index, int start, int n, int m) {
        if (index == m) {
            for (int i=0; i<m; i++) {
                System.out.print(a[i]);
                if (i != m-1) System.out.print(' ');
            }
            System.out.println();
            return;
        }
        for (int i=start; i<=n; i++) {
            a[index] = i;
            go(index+1, i+1, n, m);
        }
    }   

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        go(0, 1, n, m);
    }
}