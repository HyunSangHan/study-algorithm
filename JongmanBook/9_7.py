# arr[start]에서 시작하는 증가 부분 수열 중 최대 길이 반환
def lis(start):
    if cacheLen[start] != -1:
        return cacheLen[start]
    
    cacheLen[start] = 1
    for next in range(start+1, l):
        if start == 0 or arr[start] < arr[next]:
            cacheLen[start] = max(cacheLen[start], lis(next) + 1)
    return cacheLen[start]

# arr[start]에서 시작하는 최대 증가 부분 수열의 수를 반환한다.
def count(start):
    if cacheLen[start] == 1:
        cacheCnt[start] = 1
    
    if cacheCnt[start] != -1:
        return cacheCnt[start]
    cacheCnt[start] = 0
    for next in range(start+1, l):
        if (start == 0 or arr[start] < arr[next]) and lis(start) == lis(next) + 1:
            cacheCnt[start] = min(MAX, cacheCnt[start] + count(next))
    return cacheCnt[start]

#arr[start]에서 시작하는 LIS중 사전순으로 skip개 건너뛴 수열을 lis_arr에 저장한다.
def reconstruct(start, skip, lis_arr):
    # arr[start]는 항상 LIS에 포함된다.
    if start != 0:
        lis_arr.append(arr[start])
        
    # 뒤에 올 수 있는 숫자들과 위치의 목록을 만든다.
    # 숫자, 숫자 위치 목록
    followers = []
    for next in range(start+1, l):
        if (start == 0 or arr[start] < arr[next]) and lis(start) == lis(next) + 1:
            followers.append([arr[next], next])
    followers.sort()

    # k번째 LIS의 다음 숫자를 찾는다.
    for i in range(len(followers)):
        idx = followers[i][1]
        cnt = count(idx)
        if cnt <= skip:
            skip -= cnt
        else:
            reconstruct(idx, skip, lis_arr)
            break

# 초기값
MAX = 2000000000 + 1
cacheLen = [-1] * 9
cacheCnt = [-1] * 9
arr = [1, 5, 6, 4, 3, 2, 8, 7]
l = len(arr) # n = 8
k = 2
lis_arr = []

# 함수실행
for i in range(l):
    lis(i)
    count(i)
    
reconstruct(0, k-1, lis_arr)

# 정답 출력
print(lis_arr)