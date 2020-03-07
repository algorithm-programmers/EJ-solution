import java.util.Scanner;

/**
 * study03 외판원 순회2
 * https://www.acmicpc.net/problem/10971
 * 모든 순서를 만들고 -> 비용 계산
 */
public class study03 {
    public static boolean next_permutation(int[] a){
        int i = a.length - 1;
        while (i > 0 && a[i-1] >= a[i]) {
            i -= 1;
        }

        if(i <= 0){
            return false;
        }

        int j = a.length - 1;
        while (a[j] <= a[i-1]) {
            j -= 1;
        }

        return true;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();       //  도시의 수
        int[][] a = new int[n][n];  // 도시 간 거리
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                a[i][j] = sc.nextInt();
            }
        }
        int[] d = new int[n];       // 방문 순서
        for (int i = 0; i < n; i++) {
            d[i] = i;
        }
        int answer = Integer.MAX_VALUE;
        do {
            boolean ok = true;
            int sum = 0;
            for (int i = 0; i < n - 1; i++) {
                // 비용이 0인 경우는 갈 수 없음
                if(a[d[i]][d[i+1]] == 0){
                    ok = false;
                }else{
                    sum += a[d[i]][d[i+1]];
                }
            }
            if(ok && a[d[n-1]][d[0]] != 0){
                sum += a[d[n-1]][d[0]];
                if(answer > sum){
                    answer = sum;
                }
            }
        } while (next_permutation(d));
        
        System.out.println(answer);
    }
}