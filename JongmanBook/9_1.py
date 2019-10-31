def lis(start):
    if cache[start] != -1:
        return cache[start]
    cache[start] = 1
    bestNext = -1 ##diff
    for next in range(start, l):
        if arr[start] < arr[next]:
            if cache[start] < lis(next) + 1:
                cache[start] = lis(next) + 1
                bestNext = next ##diff
        print("   --- next : {}".format(next))
        print("   | <cache> : {}".format(cache))
        print("   | <choices> : {}".format(choices))

    choices[start] = bestNext ##diff
    return cache[start]

def reconstruct(start): ##diff
    seq_tmp.append(arr[start])
    next = choices[start]
    if next != -1:
        reconstruct(next)

l = int(input())
arr = list(map(int, input().split()))
cache = [-1] * l
choices = [0] * l ##diff
seq = [] ##diff

for i in range(l):
    print("---{}---".format(i))
    print("<cache> : {}".format(cache))
    print("<choices> : {}".format(choices))
    lis(i)

for i in range(l): ##diff
    seq_tmp = []
    reconstruct(i)
    if len(seq) < len(seq_tmp):
        seq = seq_tmp

print(seq)