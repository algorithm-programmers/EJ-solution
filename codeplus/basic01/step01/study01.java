import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 * study01 - BufferedReader
 * String 이 아닌 타입일 경우 형변환이 필요하다.
 * 예외 처리를 꼭 해줘야한다.
 */
public class study01 {

    public static void main(String[] args) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        String str = bf.readLine();
        int i = Integer.parseInt(bf.readLine());
    }
}