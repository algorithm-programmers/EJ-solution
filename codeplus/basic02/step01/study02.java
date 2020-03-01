import java.util.Scanner;

/**
 * study02 사탕게임
 * https://www.acmicpc.net/problem/3085
 */
public class study02 {
    static int check(char[][] arr){
        int n = arr.length;
        int answer = 1;
        for (int i = 0; i < n; i++) {
            // 'i행'에 대해서 최대 연속의 갯수를 구한다.
            int cnt = 1;
            for (int j = 1; j < n; j++) {
                if(arr[i][j] == arr[i][j-1]){
                    // 연속하다면
                    cnt += 1;
                }else{
                    // 연속하지 않다면 cnt 초기화
                    cnt = 1;
                }
                // 최댓값 비교
                if(answer < cnt){
                    answer = cnt;
                }
            }
            // 'i열'에 대해서 최대 연속의 갯수를 구한다.
            cnt = 1;
            for (int j = 1; j < n; j++) {
                if(arr[j][i] == arr[j-1][i]){
                    cnt += 1;
                }else{
                    cnt = 1;
                }
                if(answer < cnt){
                    answer = cnt;
                }
            }
        }
        return answer;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        char[][] arr = new char[n][n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.next().toCharArray();   // ['Y', 'C', 'P', 'Z', 'Y']
        }
        int answer = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                // 오른쪽과 비교
                if(j+1 < n){
                    char t = arr[i][j];
                    arr[i][j] = arr[i][j+1];
                    arr[i][j+1] = t;
                    int temp = check(arr);
                    // 최댓값 구하기
                    if(answer < temp){
                        answer = temp;
                    }
                    // 다시 원래 상태로 돌려주기
                    t = arr[i][j];
                    arr[i][j] = arr[i][j+1];
                    arr[i][j+1] = t;
                }
                // 아래와 비교
                if(i+1 < n){
                    char t = arr[i][j];
                    arr[i][j] = arr[i+1][j];
                    arr[i+1][j] = t;
                    int temp = check(arr);
                    // 최댓값 구하기
                    if(answer < temp){
                        answer = temp;
                    }
                    // 다시 원래 상태로 돌려주기
                    t = arr[i][j];
                    arr[i][j] = arr[i+1][j];
                    arr[i+1][j] = t;
                }
            }
        }
        System.out.println(answer);
    }
}