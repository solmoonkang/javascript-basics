// Callbacks
function firstFunction(parameters, callback) {
    const response1 = request('http://abc.com?id=${parameters.id}');
    callback(response1);
}

function secondFunction(response1, callback) {
    const response2 = request('http://bcd.com', response1);
    callback();
}

firstFunction(para, function (response1) {
    secondFunction(response1, function () {
        thirdFunction(para, function () {
            // ...
        });
    });
});

// Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        // 비동기 요청
        const success = false;

        if (success) {
            resolve('성공');
        } else {
            reject('실패');
        }
    })
}

fetchData()
    .then(function (result) {
        console.log(result);
    })
    .catch(function (error) {
        console.log(error);
    })


// Promise: 실제 비동기 요청 두 개 보내기
fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .them: resolve 값이 여기로 들어온다.
    .then(response1 => response1.json())
    .then(json => console.log(json))
    .then(() => fetch('https://jsonplaceholder.typicode.com/todos/2'))
    .then(response2 => response2.json())
    .then(json => console.log(json))
    // .catch: reject 값이 여기로 들어온다.
    .catch(err => console.log(err))
    // .finally: 이행이든 거부든 모두 마지막엔 여기로 들어온다.
    .finally(() => console.log('----모든 작업 끝----'))


// Promise: Promise.all()
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});