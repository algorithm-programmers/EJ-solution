import java.util.Scanner;

/**
 * study01 순열 - 다음 순열
 * https://www.acmicpc.net/problem/10972
 * 순열 규칙 : 사전순! 가장 앞선 순열은 오름차순, 가장 마지막 순열은 내림차순
 * 
 * 1. a = [7, 2, 3, 6, 5, 4, 1]; a[i-1] < a[i] 를 만족하는 가장 큰 수 i
 *                 <  >  >  > 이므로 723으로 시작하는 마지막 순열을 찾아야한다.
 * 2. [6,5,4,1]에서 a[2]=3 보다 큰, 마지막(가장 뒤에 있는) 숫자를 찾는다.
 * 3. a[i], a[i-1]의 자리를 바꾼다. => 724...
 * 4. 724,6531 에서 뒷 부분의 순열을 뒤집는다. 724,1356
 * 
 */
public class study01 {
    public static boolean next_permutation(int[] arr){
        int i = arr.length - 1;
        // 1.
        while (i > 0 && arr[i-1] >= arr[i]) {
            i -= 1;
        }

        if(i <= 0) return false; // 마지막 순열
        
        // 2.
        int j = arr.length - 1;
        while (arr[j] <= arr[i-1]) {
            j -= 1;
        }

        // 3.
        int temp = arr[i-1];
        arr[i-1] = arr[j];
        arr[j] = temp;

        // 4.
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