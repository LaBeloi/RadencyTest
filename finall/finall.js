function sum(array) {
    let num = 0
    for (let i of array) {
        num += i;
    }
    return num;
}
function findTheBiggest(a) {
    let max = 0;
    for (let i = 0; i < a.length; i++) {
        max = Math.max(max, a[i])
    }
    return max
}
function combinations(a, c) {
    let index = []
    let n = a.length
    for (let j = 0; j < c; j++)
        index[j] = j
    index[c] = n
    let ok = true
    let result = []
    while (ok) {
        let comb = []
        for (let j = 0; j < c; j++) {
            comb[j] = a[index[j]]
        }
        result.push(comb)
        ok = false
        for (let j = c; j > 0; j--) {
            if (index[j - 1] < index[j] - 1) {
                index[j - 1]++
                for (let k = j; k < c; k++)
                    index[k] = index[k - 1] + 1
                ok = true
                break
            }
        }
    }
    return result
}
function chooseDistance(t, k, ls) {
    if (t < 0 || typeof t !== 'number') {
        return Error('Сума відстаней повинна бути цілим числом')
    }
    if (k <= 0 || typeof k !== 'number') {
        return Error('кількість міст для відвідування має бути більше 0');
    }
    if (ls.length < 1) {
        return Error('Список відстаней має містити не менше 1 значення');
    }
    for (let i of ls) {
        if (i < 0) {
            return Error('Відстані в списку повинні бути додатніми, або нульовими значеннями');
        }
    }
    const array = combinations(ls, k);
    const arrayOfSum = [];
    for (let i of array) {
        const res = sum(i);
        if (res <= t) {
            arrayOfSum.push(res)
        }
    }
    return findTheBiggest(arrayOfSum)
}
console.log(chooseDistance(180, 3, [51, 56, 58, 59, 61]))
console.log(chooseDistance(230, 3, [91, 74, 73, 85, 73, 81, 87]))