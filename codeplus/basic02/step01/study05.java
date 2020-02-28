import java.util.Scanner;

/**
 * study05 테트로미노
 * https://www.acmicpc.net/problem/14500
 * 1. 도형의 유형의 개수 파악 2. 도형의 위치 파악
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
        // 도형들을 '어느 위치에 놓을 건지' 결정하는 방법의 수
        // 도형이 놓인 칸에 쓰여 있는 수들의 최대 합을 구하는 것이므로 temp 가 answer 보다 크면 temp 가 최댓값이 된다.
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                // 1X4 크기 도형
                if(j+3 < m){
                    int temp = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i][j+3];
                    if(answer < temp) answer = temp;
                }
                // 4X1 크기 도형
                if(i+3 < n){
                    int temp = arr[i][j] + arr[i+1][j] + arr[i+2][j] + arr[i+3][j];
                    if(answer < temp) answer = temp;
                }
                // '▙' 모양 도형 (가로가 김)
                if(i+1 < n && j+2 < m){
                    int temp = arr[i][j] + arr[i+1][j] + arr[i+1][j+1] + arr[i+1][j+2];
                    if(answer < temp) answer = temp;
                }
                // '▛' 모양 도형 (세로가 김)
                if(i+2 < n && j+1 < m){
                    int temp = arr[i][j] + arr[i][j+1] + arr[i+1][j] + arr[i+2][j];
                    if(answer < temp) answer = temp;
                }
                // 'ㄱ' 3X2 (가로가 김)
                if(i+1 < n && j+2 < m){
                    int temp = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+2];
                    if(answer < temp) answer = temp;
                }
                // '▟' 모양 도형
                if(i+2 < n && j-1 >= 0){
                    int temp = arr[i][j] + arr[i+1][j] + arr[i+2][j] + arr[i+2][j-1];
                    if(answer < temp) answer = temp;
                }
                // '▟' 모양 도형 (가로가 김) 
                if(i-1 >= 0 && j+2 < m){
                    int temp = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i-1][j+2];
                    if(answer < temp) answer = temp;
                }
                if (i+2 < n && j+1 < m) {
                    int temp = a[i][j] + a[i+1][j] + a[i+2][j] + a[i+2][j+1];
                    if (answer < temp) answer = temp;
                }
                if (i+1 < n && j+2 < m) {
                    int temp = a[i][j] + a[i][j+1] + a[i][j+2] + a[i+1][j];
                    if (answer < temp) answer = temp;
                }
                if (i+2 < n && j+1 < m) {
                    int temp = a[i][j] + a[i][j+1] + a[i+1][j+1] + a[i+2][j+1];
                    if (answer < temp) answer = temp;
                }
                // 2X2
                if(i+1 < n && j+1 < m){
                    int temp = arr[i][j] + arr[i][j+1] + arr[i+1][j] 
                    + arr[i+1][j+1];
                    if(answer < temp) answer = temp;
                }
                // ▟▘ 모양
                if (i-1 >= 0 && j+2 < m) {
                    int temp = arr[i][j] + arr[i][j+1] + arr[i-1][j+1] + arr[i-1][j+2];
                    if (answer < temp) answer = temp;
                }
                if (i+2 < n && j+1 < m) {
                    int temp = arr[i][j] + arr[i+1][j] + arr[i+1][j+1] + arr[i+2][j+1];
                    if (answer < temp) answer = temp;
                }
                if (i+1 < n && j+2 < m) {
                    int temp = arr[i][j] + arr[i][j+1] + arr[i+1][j+1] + arr[i+1][j+2];
                    if (answer < temp) answer = temp;
                }
                if (i+2 < n && j-1 >= 0) {
                    int temp = arr[i][j] + arr[i+1][j] + arr[i+1][j-1] + arr[i+2][j-1];
                    if (answer < temp) answer = temp;
                }
                if (j+2 < m) {
                    int temp = arr[i][j] + arr[i][j+1] + arr[i][j+2];
                    // ▟▖ 모양
                    if (i-1 >= 0) {
                        int temp2 = temp + arr[i-1][j+1];
                        if (answer < temp2) answer = temp2;
                    }
                    // ▜▘ 모양
                    if (i+1 < n) {
                        int temp2 = temp + arr[i+1][j+1];
                        if (answer < temp2) answer = temp2;
                    }
                }
                if (i+2 < n) {
                    int temp = arr[i][j] + arr[i+1][j] + arr[i+2][j];
                    // 'ㅏ' 모양
                    if (j+1 < m) {
                        int temp2 = temp + arr[i+1][j+1];
                        if (answer < temp2) answer = temp2;
                    }
                    // 'ㅓ' 모양
                    if (j-1 >= 0) {
                        int temp2 = temp + arr[i+1][j-1];
                        if (answer < temp2) answer = temp2;
                    }
                }
            }
        }
        System.out.println(answer);
    }
}