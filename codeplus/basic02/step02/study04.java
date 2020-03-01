/**
 * study04 N과 M (4)
 * https://www.acmicpc.net/problem/15652
 * 중복 선택 가능, 오름차순
 */
public class study04 {
    static int[] a = new int[10];
    // 중복 가능이므로 i ~ n 에서 구할 것
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
            // start 는 다시 i부터
            go(index+1, i, n, m);
        }
    }  

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        go(0, 1, n, m);
    }
}