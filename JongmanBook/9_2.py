# 입력조건
n, w = 6, 10
volume = [4, 2, 6, 4, 2, 10]
need = [7, 10, 6, 7, 5, 4]
name = ['laptop', 'camera', 'xbox', 'grinder', 'dumbell', 'encyclopedia']

# 캐싱할 공간 만들기
cache = [[-1] * n for _ in range(w+1)]

# 남은 용량 capacity일 때, item 이후 의 물건들을 싸서 얻을 수 있는 최대 만족도
def pack(capacity, item):
    if item == n:
        return 0
    
    if cache[capacity][item] != -1:
        return cache[capacity][item]
    
    # 물건을 담지 않았을 경우
    cache[capacity][item] = pack(capacity, item + 1)
    # 물건을 담을 경우
    if capacity >= volume[item]:
        cache[capacity][item] = max(cache[capacity][item], pack(capacity - volume[item], item + 1) + need[item])
        
    return cache[capacity][item]

# 선택한 물건들의 목록을 picked에 저장
def reconstruct(capacity, item, picked):
    if item == n:
        return

    if pack(capacity, item) == pack(capacity, item+1):
        reconstruct(capacity, item + 1, picked)
    else:
        picked.append(name[item])
        reconstruct(capacity - volume[item], item + 1, picked)

# 함수실행
pack(w, 0)

picked = []
reconstruct(w, 0, picked)

# 출력
print(picked)