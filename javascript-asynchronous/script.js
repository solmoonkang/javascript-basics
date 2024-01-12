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