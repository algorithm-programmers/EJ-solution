import java.util.Scanner;

/**
 * study01 순열 - 다음 순열
 * https://www.acmicpc.net/problem/10972
 * 순열 규칙 : 사전순! 가장 앞선 순열은 오름차순, 가장 마지막 순열은 내림차순
 */
public class study01 {
    public static boolean next_permutation(int[] arr){
        int i = arr.length - 1; // 3, arr : 1543
        while (i > 0 && arr[i-1] >= arr[i]) {   
            // i = 3, arr[i] = 3, arr[i-1] = 4
            // i = 2, arr[i] = 4, arr[i-1] = 5
            i -= 1;
        }

        if(i <= 0) return true; // 마지막 순열
        
        int j = arr.length - 1; // 3
        while (arr[j] <= arr[i-1]) {
            // i = 2, j = 3, arr[j] = 3, arr[i-1] = 5
            // i = 2, j = 2, arr[j] = 4, arr[i-1] = 5
            // i = 2, j = 1, arr[j] = 5, arr[i-1] = 5
            // i = 2, j = 0, arr[j] = 1, arr[i-1] = 5
            j -= 1;
        }

        // i = 2, j = 0
        // arr[i-1] = 5, arr[j] = 1
        int temp = arr[i-1];
        arr[i-1] = arr[j];
        arr[j] = temp;

        j = arr.length - 1;
        while (i < j) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i += 1;
            j -= 1;
        }

        return true;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        if(next_permutation(arr)){
            for (int i = 0; i < n; i++) {
                System.out.println(arr[i] + " ");
            }
            System.out.println();
        }else{
            System.out.println("-1");
        }
    }
}