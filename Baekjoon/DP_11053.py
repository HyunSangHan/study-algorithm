def dp(l, src):
    lis = [1] * l
    for i in range(1, l):
        for j in range(i):
            if src[j] < src[i]: lis[i] = max(lis[j]+1, lis[i])
    return max(lis)

def main():
    l = int(input())
    src = list(map(int, input().split()))
    print(dp(l, src))

main()

# Correct!
# Memory: 29288KB / Time: 144ms