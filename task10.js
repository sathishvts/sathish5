//  1.
 
 const fruits=["apple","goa","dragon"]
console.log(fruits);

fruits.push("fiz","bees");
console.log(fruits);


fruits.pop()
console.log(fruits);

// 2.

function splice(){
let arr=[1,2,3,4,5]
arr.splice(1,2,100);
return (arr)
}

console.log(splice());

// 3.

function concat(){
    let numbers=[1,2,3,4,5]
    let letters=["six","seven","eigth","nine","ten"]
    let concat =numbers.concat(letters)
    return (concat)
}

console.log(concat());


// 4.

function map(){
 let num=[12,22,32,42,52];
let arr =num.map(numbers=>numbers*2);
let filter =arr.filter (map=>map % 2 ===0);
return(filter);

}
console.log(map());


// 5.

function slice() {
 
    let arr=[1,2,3,4,5]
    let names =arr.slice(1,3);
    return(names)
}
console.log(slice());
