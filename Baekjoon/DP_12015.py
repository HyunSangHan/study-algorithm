def lis(start):
    if cache[start] != -1:
        return cache[start]
    cache[start] = 1
    for next in range(start, l):
        if arr[start] < arr[next]:
            if cache[start] < lis(next) + 1:
                cache[start] = lis(next) + 1 # 이거랑 같음 => cache[start] = max(cache[start], lis(next) + 1)
    return cache[start]

l = int(input())
arr = list(map(int, input().split()))
cache = [-1] * l

for i in range(l):
    lis(i)

print(max(cache))

# Done
# Timeout