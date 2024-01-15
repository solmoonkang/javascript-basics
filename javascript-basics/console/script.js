console.log('Hello!');
console.log(123);
console.log(true);
var greeting = 'Hello.';
console.log(greeting);
// 객체 형식으로 출력
console.log({a: "a", b: "b"});
// 테이블 형식으로 출력
console.table({a: "a", b: "b"});

// 에러 메세지를 출력
console.error('Error!');
// 경고 메세지를 출력
console.warn('Warning!');

// time, 시작과 timeEnd, 끝의 라벨을 동일하게 작성해야 한다.
// 1부터 5까지 걸린 시간을 출력해준다.
console.time('Hello');
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.timeEnd('Hello');

// 모든 Console을 초기화
console.clear();