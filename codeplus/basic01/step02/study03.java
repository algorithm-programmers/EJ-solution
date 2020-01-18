import java.util.Scanner;

/**
 * study03 괄호
 * 스택의 크기를 이용하는데, 괄호의 ( 여는 문자를 판단 기준으로 개수를 센다.
 * 개수가 마이너스이면 여는 괄호가 부족하다.
 * 개수가 플러스이면 닫는 괄호가 부족하다.
 */
public class study03 {
    public static String isValid(String str){
        int n = str.length();
        int cnt = 0;
        for(int i = 0; i < n; i++){
            if(str.charAt(i) == '('){
                cnt += 1;
            }else {
                cnt -= 1;
            }
            if(cnt < 0){
                return "NO";
            }
        }
        if(cnt == 0){
            return "YES";
        }else {
            return "NO";
        }
    } 

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        while(n-- > 0){
            System.out.println(isValid(sc.next()));
        }
    }
}