// задание 1
let a = [];
let m = 0;
let n = 100;
let count = 100;

for ( let i = m; i < count; ++i ) {
    a.push( Math.round(Math.random() * n) );
}

console.log(a);

// задание 2

let string ="hello, world!"
 let rev = ""

 for(let i = string.length - 1; i >= 0; i--){
    rev += string[i]
 }
 console.log(rev)

//  задание 3

let arr = [false, false, true, false, true, false, false, false, true, false];
let damaged = false; 

for (let i = 0, x = 0; i < arr.length; ++i) {
    if (arr[i]) { 
        if (damaged) { 
            console.log('танк уничтожен');
            break;
        }
        else {
            damaged = true; 
            console.log('танк поврежден');
        }
    } 
    else {
        console.log(`танк переместился на позицию ${i+1}`);
    }
}
  
// задание 4


    let days = ["понидельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
    let week;
    let arr1 = [];

    for (let i = 1; i <= 31; i++) {
        arr1.push(i);
        for (let j = 0; j < days.length; j++) {
            week = days[j];
            console.log(`${i} января, ${week}`);
        }
    }
