
/*

//2개의 정수의 합을 구하는 함수
function add(num1, num2) {
    return num1 + num2;
}

//3개의 정수의 합을 구하는 함수
function addForThree(num1, num2, num3) {
    return num1 + num2 + num3;
}
*/


//n개의 정수의 합을 구하는 함수
function addAll(numbers) {
    numbers = numbers || [];
    var total = 0;
    for (var num of numbers) {
        total += num;
    }
    return total;
}

function addAll2(...numbers) {
    var total = 0;
    for (var num of numbers) {
        total += num;
    }
    return total;
}

var result = addAll([10, 20, 30, 40, 50]);
console.log(result);

var result2 = addAll2(10, 20, 30, 40, 50, 100);
console.log(result2);


