# 동적 계획법(Dynamic Programming)
- Richard Bellman 이 개발한 방법론

- 중복된 계산을 피하는 방법
    - 중복된 계산이 많은 피보나치 수열
    ```
    int fib(int n){
        if(n == 1 || n == 2)
            return 1;
        else
            return fib(n-2) + fib(n-1);
    }
    ```
    - Memoization
    ```
    int fib(int n){
        if(n == 1 || n == 2)
            return 1;
        else if(f[n] > -1)
            return f[n];
        else {
            f[n] = fib(n-2) + fib(n-1);
            return f[n];
        }
    }
    ```
    Top-down 방식으로 중간 계산 결과를 caching 해서 중복 계산을 피한다.
    - Dynamic Programming
    ```
    int fib(int n){
        f[1] = f[2] = 1;
        for(int i=3; i <= n; i++)
            f[n] = f[n-1] + f[n-2];
        return f[n];
    }
    ```
    Bottom-up 방식으로 중복 계산을 피한다.

- Bottom-up 방식
    - 가장 기본적인 항부터 순차적으로 계산.
    - 순환식에서 오른쪽에 등장하는 값들이 왼쪽 값보다 항상 먼저 계산되어야 한다.
    - Recursion 에 수반되는 overhead 가 없다.

- Memoization 와 Dynamic Programming 의 공통점
    - 순환식의 값을 계산하는 기법
    - 동적 계획법의 일종이라 볼 수 있다
