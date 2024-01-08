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