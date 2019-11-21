src = list(map(int, input().split()))

[p_sauce, p_fried, p_half, min_sauce, min_fried] = src

each = p_sauce * min_sauce + p_fried * min_fried
half = 2 * p_half * max(min_sauce, min_fried)
sauce = 2 * p_half * min_fried + abs(p_sauce * (min_sauce - min_fried))
fried = 2 * p_half * min_sauce + abs(p_fried * (min_fried - min_sauce))

print(min(each, half, sauce, fried))

# Correct!
# Memory: 29284KB / Time: 60ms