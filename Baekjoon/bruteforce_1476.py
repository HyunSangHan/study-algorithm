E = 15
S = 28
M = 19
yr = 1

src = list(map(int, input().split()))

while True:
    if ((yr-src[0]) % E == 0) and ((yr-src[1]) % S == 0) and ((yr-src[2]) % M == 0):
        break
    yr += 1

print(yr)

# Correct!
# Memory: 29284KB / Time: 56ms