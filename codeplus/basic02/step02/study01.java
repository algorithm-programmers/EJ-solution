import java.io.BufferedReader;
import java.io.InputStreamReader;

/**
 * study01 카잉 달력
 * https://www.acmicpc.net/problem/6064
 * 각 줄에는 네 개의 정수 M, N, x, y가 주어진다.
 */
public class study01 {

    public static void main(String[] args) {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.valueOf(bf.readLine());
        while(t-- > 0){
            String[] line = bf.readLine().split(" ");
            int m = Integer.valueOf(line[0]);
            int n = Integer.valueOf(line[1]);
            // 나머지 연산을 사용하기 위해서 x, y에서 1을 뺀다
            int x = Integer.valueOf(line[2])-1;
            int y = Integer.valueOf(line[3])-1;
            boolean ok = false;
            // +m만큼씩 더하면 x는 고정 가능.
            for (int k = x; k < n*m; k += m) {
                if(k%n == y){
                    System.out.println(k+1);    // 앞에서 뺀 1을 다시 더해준다.
                    ok = true;
                    break;
                }
            }
            // <x:y>가 유효하지 않은 표현이라면 -1 출력
            if(!ok){
                System.out.println(-1);
            }
        }
    }
}