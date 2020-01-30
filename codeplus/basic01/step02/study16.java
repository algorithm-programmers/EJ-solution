import java.util.Scanner;

/**
 * study16 문자열 분석
 * https://www.acmicpc.net/problem/10820
 * Scanner 이용하면 시간이 너무 오래 걸린다. BufferedReader 로 다시 풀어보기.
 */
public class study16 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while(sc.hasNextLine()){
            int lower = 0;
            int upper = 0;
            int digit = 0;
            int space = 0;
    
            String str = sc.nextLine();
            for (int i = 0; i < str.length(); i++) {
                char ch = str.charAt(i);
                if('A' <= ch && ch <= 'Z'){
                    upper += 1;
                }else if('a' <= ch && ch <= 'z'){
                    lower += 1;
                }else if('0' <= ch && ch <= '9'){
                    digit += 1;
                }else if(ch == ' '){
                    space += 1;
                }
            }
            System.out.println(lower + " " + upper + " " + digit + " " + space);
        }
    }
}