import java.util.Scanner;

/**
 * study05 수학 연습문제 - 숨바꼭질
 * https://www.acmicpc.net/problem/17087
 * 수빈이와 동생들과의 위치를 가지고 최대공약수를 구하는 것이 목적이다. 
 */
public class study05 {
    static int gcd(int x, int y){
        if(y == 0){
            return x;
        }else{
            return gcd(y, x % y);
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int cnt = sc.nextInt();
        int myLoc = sc.nextInt();
        int[] diffArr = new int[cnt];
        for (int i = 0; i < cnt; i++) {
            int otherLoc = sc.nextInt();
            int locDiff = Math.abs(myLoc - otherLoc);
            diffArr[i] = locDiff;
        }
        int answer = diffArr[0];
        for (int i = 0; i < cnt; i++) {
            answer = gcd(answer, diffArr[i]);
        }
        System.err.println(answer); 
    }
}