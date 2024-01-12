// Iterator Example
function makeIterator(numbers) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < numbers.length ?
                { value: numbers[nextIndex++], done: false } :
                { value: undefined, done: true }
        }
    }
}

// 숫자 배열 생성
const numbersArr1 = [1, 2, 3];
// 이터레이터에 숫자 배열 넣어주기
const numbersIterator = makeIterator(numbersArr1);

console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());



//  Symbol.iterator
const numbersArr2 = [1, 2, 3];

// [Symbol.iterator]()를 이용하면 반복 가능한 값을 반복기로 생성이 가능하다.
const numbersIterator1 = numbersArr2[Symbol.iterator]();
console.log(numbersIterator1.next());
console.log(numbersIterator1.next());
console.log(numbersIterator1.next());
console.log(numbersIterator1.next());



// Iterable Object 
const numbersIterable2 = [1, 2, 3];
const numbersNotIterable = { a: 1, b: 2 };
console.log(typeof numbersIterable2);
console.log(typeof numbersNotIterable);
// for...of 를 사용
for (const n of numbersNotIterable) {
    console.log(n);
}

const arr = [1, 2, 3, 4];
const set = new Set([1, 2, 3, 4]);
// console.log('set', set);
const map = new Map([
    ['a', '1'],
    ['b', '2'],
]);
// console.log('map', map);
const obj = { a: 1, b: 2 };

console.log(arr[Symbol.iterator]().next());
console.log(set[Symbol.iterator]().next());
console.log(map[Symbol.iterator]().next());