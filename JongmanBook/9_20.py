moves = []

# 게임판에 놓을 수 있는 블록들의 위치를 미리 계산한다.
def cell(y, x): return 1 << (y*5 + x)

# 세 칸짜리 L자 모양 블록들을 계산한다.
def precalc():
    for y in range(4):
        for x in range(4):
            cells = []
            for dy in range(2):
                for dx in range(2):
                    cells.append(cell(y + dy, x + dx))
            square = cells[0] + cells[1] + cells[2] + cells[3]
            for i in range(4):
                moves.append(square - cells[i])

    for i in range(5):
        for j in range(4):
            moves.append(cell(i, j) + cell(i, j+1))
            moves.append(cell(j, i) + cell(j+1, i))

cache = [[-1]*5 for _ in range(5)]

def play(board):
    ret = cache[board]
    if ret != -1: return ret
    ret = 0

    for i in range(len(moves)):
        if moves[i] & board == 0:
            if not play(board | moves[i]):
                ret = 1
                break
    return ret


# test_case = [
#     [0, 0, 0, 0, 0],
#     [0, 1, 1, 0, 0],
#     [1, 1, 0, 0, 1],
#     [1, 0, 1, 1, 1],
#     [0, 0, 1, 0, 0]
# ]
# # print(play(test_case))

# for i in test_case:
#     print(play(i[4]))