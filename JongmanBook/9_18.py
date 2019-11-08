n = 5
board = [-1000, -1000, -3, -1000, -1000]
cache = [[False]*50 for _ in range(50)]


def diff(l, r):
    if l > r: # 게임이 끝난 케이스
        return 0
    
    if cache[l][r]: # 이미 겪은 케이스의 점수
        return cache[l][r]
    
    # 수를 가져가는 선택을 하는 경우
    cache[l][r] = max(board[l] - diff(l + 1, r), board[r] - diff(l, r-1))
    
    # 수를 없애는 선택을 하는 경우
    if r - l + 1 >= 2: # 2개 이상 남은 경우만 가능한 선택이므로
        cache[l][r] = max(cache[l][r], -diff(l+2, r))
        cache[l][r] = max(cache[l][r], -diff(l, r-2))
    return cache[l][r]

# 초기값
l = 0
r = n-1

# 실행 및 출력
print(diff(l, r))