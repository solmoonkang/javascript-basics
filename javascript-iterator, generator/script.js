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





// Generator Example
function* sayNumbers() {
    // generator 함수의 실행을 일시적으로 정지시킨다. 일반 함수의 return 문과 매우 유사하다.
    yield 1;
    yield 2;
    yield 3;
  }
  // generator 함수의 반환이 generator이다.
  const number = sayNumbers();
  
  console.log(number.next().value);
  console.log(number.next().value);
  console.log(number.next().value);
  console.log(number.next().value);
  
  
  
  // Generator Function Example
  function* generatorFunction() {
      yield 1;
  }
  
  const generator1 = generatorFunction();
  
  console.log(generator1 === generator1[Symbol.iterator]());
  
  // ID Creator
  function* createIds() {
      let index = 1;
  
      while (true) {
          yield index++;
      }
  }
  


  const gen = createIds();
  
  console.log(gen.next());
  console.log(gen.next());
  console.log(gen.next());
  console.log(gen.return(10));
  
  
  
  function* generatorFunction() {
      for (const number of [1, 2, 3]) {
          yield number;
      }
  
      // yield 1; yield 2; yield 3; 과 동일한 방식이다.
      yield* [1, 2, 3];
  }
  
  const generator2 = generatorFunction();
  console.log(generator2.next());
  console.log(generator2.next());
  console.log(generator2.next());
  
  for (const number of generator2) {
      console.log(number);
  }