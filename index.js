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
function findTheSecondBiggest(a, maxa) {
    let max2 = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] < maxa) {
            max2 = Math.max(max2, a[i])
        }
    }
    return max2
}
function filtration(array) {
    let resultArray = [];
    let maxValue = findTheBiggest(array)
    resultArray.push(maxValue)
    for (let i = 0; i<(array.length - 1); i++) {
        let currentMax = findTheSecondBiggest(array, maxValue);
        maxValue = currentMax;
        resultArray.push(currentMax)
    }
    return resultArray;
}
function mainFunc(array, constanta, quantityOfCities) {
    const foo = [];
    if (quantityOfCities === 1) {
        const res = findTheBiggest(array);
        if (res <= constanta) {
            foo.push(res)
            return foo
        } else return null
    };
    if (quantityOfCities === 2) {
        for (let i = 0; i <= 3; i++) {
            for (let y = 0; y <= (3-i); y++) {
                const res = sum([array[i], array[y+1]])
                foo.push(res)
            }
        }
        return foo
    };
    if (quantityOfCities === 3) {
        for (let x = 0; x < 3; x++) {
            for (let y = (0+x); y < 3; y++) {
                for (let i = 0; i < (array.length - (2+y)); i++) {
                    let result = sum([array[x], array[(1+y)], array[((2+i)+y)]]);
                    if (result <= constanta) foo.push(result);
                }
            }
        }
        return foo;
    };
    if (quantityOfCities === 4) {
        for (let i = 0; i <= 4; i++) {
            const res = sum(array) - array[i];
            if (res <= constanta) foo.push(res);
        }
        return foo
    };
    if (quantityOfCities === 5) {
        const res = sum(array);
        if (res <= constanta) {
            foo.push(res)
            return foo
        } else return null
    };
}

function chooseDistance(t, k, ls) {
    if (t < 0 || typeof t !== 'number') {
        return console.error('Сума відстаней повинна бути цілим числом');
    }
    if (k <= 0 || typeof k !== 'number') {
        return console.error('кількість міст для відвідування має бути більше 0');
    }
    if (ls.length < 1) {
        return console.error('Список відстаней має містити не менше 1 значення');
    }
    for (let i of ls) {
        if (i < 0) {
            return console.error('Відстані в списку повинні бути додатніми, або нульовими значеннями');
        }
    }
    const array = filtration(ls);
    const resultArray = mainFunc(array, t, k);
    if (resultArray === null || resultArray.length === 0) {
        return null
    } else return findTheBiggest(resultArray)
}
console.log(chooseDistance(170, 3, [51, 56, 58, 59, 61]))
