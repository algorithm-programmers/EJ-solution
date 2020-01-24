import java.util.Scanner;

/**
 * study14 알파벳 개수
 * https://www.acmicpc.net/problem/10808
 * 아스키 코드
 */
public class study14 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        int[] alpabetCnt = new int[26];
        for (int i = 0; i < str.length(); i++) {
            alpabetCnt[str.charAt(i) - 'a'] += 1;
        }
        for (int i = 0; i < 26; i++) {
            System.out.println(alpabetCnt[i] + " ");
        }
        System.out.println();
    }
}