console.log('Hello');
function getSenseOfLife(){
return 42;
}

//const res = getSenseOfLife;
//console.log(res);

console.log(getSenseOfLife());
//=====

function getSquard(num){
    return num * num;
}
//test data
console.log(0);
console.log(-7);
console.log(145);


//=====
//input:number
//output:undefined
//function decloration

function printMessege(num) {
console.log ('I am ' + num + ' years old');
}

//func expr
const printMessege = function (num) {
    console.log ('I am ' + num + ' years old');
    }

//test data
console.log(printMessege(50));
console.log(printMessege(12));
console.log(printMessege(0));

//======
const mult = (fistNum, secondNum) => {
    return fistNum * secondNum;
}

//test data
console.log(mult(3, -4));