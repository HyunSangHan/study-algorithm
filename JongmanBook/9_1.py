def lis(start):
    if cache[start] != -1:
        return cache[start]
    cache[start] = 1
    bestNext = -1
    for next in range(start, n):
        if start == -1 or arr[start] < arr[next]:
            cand = lis(next) + 1
            if cand > cache[start]:
                cache[start] = cand
                bestNext = next
    choices[start] = bestNext
    return cache[start]

def reconstruct(start):
    if start != -1:
        seq_tmp.append(arr[start])
    next = choices[start]
    if next != -1:
        reconstruct(next)

arr = list(map(int, input().split()))
n = len(arr)
cache = [-1] * n
choices = [0] * n
seq = []

for i in range(n):
    lis(i)
    print("---{}---".format(i))
    print("<cache> : {}".format(cache))
    print("<choices> : {}".format(choices))

for i in range(n):
    seq_tmp = []
    reconstruct(i)
    if len(seq) < len(seq_tmp):
        seq = seq_tmp

print(seq)

### 테스트 결과 예시 1
# 3 2 1 4 5
# ---0---
# <cache> : [3, -1, -1, 2, 1]
# <choices> : [3, 0, 0, 4, -1]
# ---1---
# <cache> : [3, 3, -1, 2, 1]
# <choices> : [3, 3, 0, 4, -1]
# ---2---
# <cache> : [3, 3, 3, 2, 1]
# <choices> : [3, 3, 3, 4, -1]
# ---3---
# <cache> : [3, 3, 3, 2, 1]
# <choices> : [3, 3, 3, 4, -1]
# ---4---
# <cache> : [3, 3, 3, 2, 1]
# <choices> : [3, 3, 3, 4, -1]
# [3, 4, 5]

### 테스트 결과 예시 2
# 5 4 2 3 6
# ---0---
# <cache> : [2, -1, -1, -1, 1]
# <choices> : [4, 0, 0, 0, -1]
# ---1---
# <cache> : [2, 2, -1, -1, 1]
# <choices> : [4, 4, 0, 0, -1]
# ---2---
# <cache> : [2, 2, 3, 2, 1]
# <choices> : [4, 4, 3, 4, -1]
# ---3---
# <cache> : [2, 2, 3, 2, 1]
# <choices> : [4, 4, 3, 4, -1]
# ---4---
# <cache> : [2, 2, 3, 2, 1]
# <choices> : [4, 4, 3, 4, -1]
# [2, 3, 6]