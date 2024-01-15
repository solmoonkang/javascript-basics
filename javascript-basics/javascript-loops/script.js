// For Loop
for(let i = 0; i < 10; i++) {
    if(i === 3) {
        console.log('It is 3');
        continue;
    }

    if(i === 5) {
        console.log('5 Stop the loop');
        break;
    }
    console.log('Number' + i);
}

// For / In Loop
const user = {
    name: 'Han',
    province: '경기도',
    city: '성남시'
}

for(let x in user) {
    console.log(`${x} : ${user[x]}`);
}

// While Loop
let a = 0;

while (a < 10) {
    console.log('Number' + a);
    a++;
}

// Do / While Loop
let m = 0;

do {
    console.log('Number' + m);
    m++;
}

while (m < 10);

// LOOP THROUGH ARRAY
const locations = ['서울', '부산', '울산', '대구'];

// FOR
for(let i = 0; i < locations.length; i++) {
    console.log(locations[i]);
}

// FOREACH
locations.forEach(function (location, index, array) {
    console.log(`${index} : ${location}`);
    console.log(array);
});

// MAP
locations.map(function (location) {
    console.log(location);
});