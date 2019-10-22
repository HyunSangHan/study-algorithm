def fibo(n, hit):
    if n < 1:
        hit[0] += 1
        return 0
    elif n == 1:
        hit[1] += 1
        return 1
    else:
        if hit[n] != -1:
            return hit[n]
        else:
            return fibo(n-1, hit) + fibo(n-2, hit)

def dp(n):
    if n > 1:
        hit = [0, 0] + [-1] * (n-1)
    else:
        hit = [0, 0]
    fibo(n, hit)
    return hit

def main():
    N = int(input())
    ans = [0] * N
    for i in range(N):
        ans[i] = dp(int(input()))
    for num in range(N):
        print("{} {}".format(ans[num][0], ans[num][1]))

main()

# Done
# Timeout