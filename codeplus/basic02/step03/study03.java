import java.util.Scanner;

/**
 * study03 외판원 순회2
 * 
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
        int n = sc.nextInt();
        int[][] a = new int[n][n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                a[i][j] = sc.nextInt();
            }
        }
        int[] d = new int[n];   // 방문 순서
        for (int i = 0; i < n; i++) {
            d[i] = i;
        }
        int answer = Integer.MAX_VALUE;
        do {
            
        } while (next_permutation(d));
        
        System.out.println(answer);
    }
}