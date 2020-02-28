import java.util.Scanner;

/**
 * study05 테트로미노
 * https://www.acmicpc.net/problem/14500
 */
public class study05 {
    // 19가지 모양의 도형
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        int[][] arr = new int[n][m];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                arr[i][j] = sc.nextInt();
            }
        }
        int answer = 0;
        // 도형들을 어느 위치에 놓을 건지 결정하는 방법의 수
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if(j+3 < m){
                    // 일자 도형
                    int temp = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i][j+3];
                    if(answer < temp) answer = temp;
                }
            }
        }
    }
}