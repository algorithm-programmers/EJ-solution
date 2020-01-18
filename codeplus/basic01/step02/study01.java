import java.util.Scanner;

/**
 * study01
 * 스택 구현
 * https://www.acmicpc.net/problem/10828
 */
public class study01 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] stack = new int[n];
        int size = 0;
        while(n-- > 0){
            String cmd = sc.next();
            if(cmd.equals("push")){
                int num = Integer.parseInt(sc.next());
                stack[size++] = num;
            }else if(cmd.equals("top")){
                if(size == 0){
                    System.out.println("-1");
                }else{
                    System.out.println(stack[size - 1]);
                }
            }else if(cmd.equals("size")){
                System.out.println(size);
            }else if(cmd.equals("empty")){
                if(size == 0){
                    System.out.println("1");
                }else{
                    System.out.println("0");
                }
            }else if(cmd.equals("pop")){
                if(size == 0){
                    System.out.println("-1");
                }else{
                    System.out.println(stack[size - 1]);
                    size -= 1;
                }
            }
        }
        sc.close();
        System.out.println(size);
    }
}