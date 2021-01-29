//Section A: .filter()
//1)
function fiveAndGreaterOnly(arr) {


    const result = arr.filter(function(num){
        if (num >= 5)
            return num;
    });
    return result;
}
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));


//2)
function evensOnly(arr){

    const result = arr.filter(function(num){
        if (num % 2 == 0)
            return num;
    });
    return result;

}

console.log(evensOnly([3, 6, 8, 2]));

//Extra Credit): Make a filtered list of all the people who are old enough to see The Matrix (17+).

function ofAge(arr){
    const result = arr.filter(function(x){
        return x.age > 17;
    });
    return result;
}
console.log(ofAge([{ name: "Angeline Jolie", age: 80 }, { name: "Eric Jones", age: 2 }, { name: "Paris Hilton", age: 5 }, { name: "Kayne West", age: 16 }, { name: "Bob Ziroll", age: 100 }]));



//Section B: .map()
//1)

function doubleNumbers(arr){

    const result = arr.map(function(num){
       return num * 2;
        return num; 

    });
    return result;
}

console.log(doubleNumbers([2, 5, 100]));

//2)
function stringItUp(arr){

    const result = arr.map(function(num){
        return num + ' ';
    });
    return result;
}
console.log(stringItUp([2, 5, 100]));

//3) 
function capitalizeNames(arr){
    const result = arr.map(function(num){
         return num[0].toUpperCase() + num.slice(1).toLowerCase();

    });
    return result;
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));




//section C: .reduce()
//1)
function total(arr){

    const result = arr.reduce(function(num, finalAddition){
        return finalAddition = finalAddition + num;
       
    });

    return result;
}
console.log(total([1, 2, 3]));

//2)
function stringConcat(arr) {
    const result = arr.reduce(function(num){
        return num  ;

    });
    
    return result;
}

console.log(stringConcat([1,2,3]));


//Section D: .sort()
//1)
function leastToGreatest(arr) {
    const result = arr.sort(function(num1, num2){
        return num1 - num2;

    });
    return result;

}
console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));

//2)
function greatestToLeast(arr) {
    const result = arr.sort(function(num1, num2){
        return num2 - num1;

    });
    return result;

}
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));

//3)
function lengthSort(arr) {

    var result = arr.sort(function(a, b) {
        return a.length - b.length;

    });
    return result;

}
console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));

//Extra Credit)
function alphabetical(arr) {

    var result = arr.sort(function(b, a) {
        if (b < a)
            return -1;

        if (b > a)
            return 1;
        return 0;


    });
    return result;

}
console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]));

