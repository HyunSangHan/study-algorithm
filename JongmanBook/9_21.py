triangle = list(map(int, input().split()))
n = len(triangle)
C = [0] * n

def iterative():
    for x in range(n): # 기저
        C[n-1][x] = triangle[n-1][x]
    
    for y in range(n-2, 0, -1):
        for x in range(y+1):
            C[y][x] = max(C[y+1][x], C[y+1][x+1]) + triangle[y][x]
    return C[0][0]