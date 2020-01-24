import java.util.Scanner;

/**
 * study04 소수찾기 - 에라토스테네체
 * 구하는 수 전체를 두고, 각각의 배수를 지워준다.
 * https://www.acmicpc.net/problem/1929
 * m 이상 n 이하의 수
 * 지워졌으면 true(소수 아님) 안지워졌으면 false(소수)
 */
public class study04 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int m = sc.nextInt();
        int n = sc.nextInt();
        boolean[] checked = new boolean[n + 1];
        checked[0] = checked[1] = true;     // 소수에서 제외할 수 0, 1
        for (int i = 2; i*i <= n; i++) {    // ex) i=5 이면, 5*2, 5*3, 5*4 는 2,3의 배수 검사로 인해 이미 지워졌기 때문에 5*5 이상의 수만 구하면 된다.
            if(checked[i] == true){
                continue;
            }
            for (int j = i + i; j <= n; j += i) {   // j+=i => i 배수를 지워나간다.
                // 원래는 int j = i*i 인데, 오버플로우가 발생하므로, j=i+i 나 j=i+2 로 바꾸는 것이 좋다. j = i*i 인 이유는 i*2, i*3, i*4,..., i*(n-1) 는 지워지기 때문에 그 이상의 수부터 구하는 것이다.
                checked[j] = true;
            }
        }
        sc.close();
        for (int i = m; i <= n; i++) {
            if(checked[i] == false){
                System.out.println(i);
            }
        }
    }
}