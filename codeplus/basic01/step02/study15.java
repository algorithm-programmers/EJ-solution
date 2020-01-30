import java.util.Scanner;

/**
 * study15 알파벳 찾기
 * https://www.acmicpc.net/problem/10809
 * study14. 알파벳 개수랑 비슷한 방법으로 풀린다.
 */
public class study15 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        int[] alpabet = new int[26];
        for (int i = 0; i < 26; i++) {
            alpabet[i] = -1;
            for (int j = 0; j < str.length(); j++) {
                int alpabetIdx = str.charAt(j) - 'a';
                if(alpabet[i] > -1){
                    continue;
                }
                if(i == alpabetIdx){
                    alpabet[i] = j;
                }
            }
        }
        for (int i = 0; i < 26; i++) {
            System.out.print(alpabet[i] + " ");
        }
        System.out.println();
    }
    // alpabetIdx 을 제대로 활용하지 못했다.

    // 다음은 for loop 한 번만 사용한 코드. alpabetIdx 가 사용되었다.
    public static void extra(){
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        int[] alpabet = new int[26];
        for (int i = 0; i < 26; i++) {
            alpabet[i] = -1;
        }
        for (int j = 0; j < str.length(); j++) {
            int alpabetIdx = str.charAt(j) - 'a';
            if(alpabet[alpabetIdx] == -1){
                alpabet[alpabetIdx] = j;
            }
        }
        for (int i = 0; i < 26; i++) {
            System.out.print(alpabet[i] + " ");
        }
        System.out.println();
    }
}