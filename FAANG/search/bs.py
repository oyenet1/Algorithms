# questions
# Alice has some cards with numberswritten on them. She arranges the cards in decresing order, and lays them out face down in a sequence on a table. She challenges Bob to pick out hte card containing a given number by turning over a few cards possible. Write a function to jelp bob locate the card


case = {"inputs": {
    'cards': [14, 12, 10, 9, 7, 6, 5, 4, 3],
    "query": 3
},
    'output': 8
}

# o(n)


def locate(cards, query):
    i = 0
    while i < len(cards):
        if cards[i] == query:
            return i
        i += 1
        if i == len(cards):
            return -1

# olog(n)


def locate2(cards, query):
    low, high = 0, len(cards) - 1
    while low <= high:
        mid = (low + high) // 2

        mid_number = cards[mid]
# 'cards': [14, 12, 10, 9, 7, 6, 5, 4, 3],
        print('low:', low, "high:", high, "middle number:", cards[mid])
        if mid_number == query:
            return mid
        elif mid_number > query:
            low = mid + 1
        elif mid_number < query:
            high = mid - 1
    return -1


def locate3(cards, query):
    low, high = 0, len(cards) - 1
    mid = (low + high) // 2
    if mid == query:
        return mid
    elif mid > query:
        low = mid
    elif mid < query:
        high = mid
    else:
        return -1
# def search2(cards, query):
#     index = 0
#     for i in cards:
#         if cards[index] == query:
#             return index
#         index += 1
#         if index == len(cards):
#             return -1


# print(search(**test_case['inputs']) == test_case['output']) to test case
print(locate2(**case['inputs']))
