


/*
for (var table = 2; table <= 9; table++) {
    console.log('====================');
    console.log(`구구단 ${table}단`);
    console.log('====================');
    for (var line = 1; line <= 9; line++) {
        console.log(`${table} x ${line} = ${table * line}`);
    }
}
*/

for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 3; j++) {
        for (var k = 0; k < 2; k++) {
            console.log(`${i} ${j} ${k}: 안녕하세요.`);
        }
    }
}