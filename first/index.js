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
function topDistance(constanta,quantityOfCities,array) {
    const resOfFirst = [];
    const resOfSecond = [];
    for(i=1; i<=((Math.pow(2, array.length) - 1)); i++) {
        b = i.toString(2);
        while(b.length < 5) b = '0' + b;
        let farr = array.filter( (item,n, arr) => {
            return b.charAt(4-n) > 0
        });
        if (farr.length === quantityOfCities) resOfFirst.push(farr);
    }
    for (let i of resOfFirst) {
        let foo = sum(i);
        if (foo <= constanta) resOfSecond.push(foo);
    }
    if (resOfSecond.length > 0) return findTheBiggest(resOfSecond);
    else return null;
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
    const array = filtration(ls);
    return topDistance(t, k, array)
}
console.log(chooseDistance(180, 55, [51, 56, 58, 59, 61]))
