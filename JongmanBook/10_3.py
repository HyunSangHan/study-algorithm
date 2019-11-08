def heat(order):
    ret = 0
    begin_eat = 0
    for i in range(len(order)):
        begin_eat += order[i][1]
        ret = max(ret, begin_eat + order[i][0])
    return ret

time_heat = [1, 2, 3] # 데우는 데 걸리는 시간
time_eat = [1, 2, 1] # 먹는데 걸리는 시간

order = [[1, 1], [2, 2], [1, 3]] # 먹는데 걸리는 시간 + 데우는 데 걸리는 시간
order = sorted(order, key=lambda x: x[0], reverse=True)

print(heat(order))