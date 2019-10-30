def dp():
    for i in range(1, l):
        for j in range(i):
            if arr[j] > arr[i] and sis[j] + 1 > sis[i]:
                sis[i] = sis[j] + 1
    return max(sis)

l = int(input())
arr = list(map(int, input().split()))
sis = [1] * l
print(dp())

# Correct!
# Memory: 29288KB / Time: 120ms