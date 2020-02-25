import java.util.Arrays;
import java.util.Scanner;

/**
 * study01
 */
public class study01 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = 9;
        int[] arr = new int[n];
        int sum = 0;
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
            sum += arr[i];
        }
        // 오름차순으로 출력하기 위해 정렬한다.
        Arrays.sort(arr);
        for (int i = 0; i < n; i++) {
            for (int j = i+1; j < n; j++) {
                // 9에서 2명을 제외한 모든 난쟁이의 키의 합이 100이다.
                if(sum - arr[i] - arr[j] == 100){
                    for (int j2 = 0; j2 < n; j2++) {
                        if(j2 == i || j2 == j){
                            continue;
                        }
                        System.out.println(arr[j2]);
                    }
                }
            }
        }
    }
}