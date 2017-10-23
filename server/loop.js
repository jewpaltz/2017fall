let str = "";
let arr = [];

function writeChars(start, end, length, depth = 1){
    for (let i = start; i < end; i++) {
        //str += String.fromCharCode(i + 65);
        arr[depth -1] = String.fromCharCode(i + 65);
        //console.log(arr);
        if(depth < 3)
            console.log({depth: depth, i: i, arr: arr});
        if(length > depth){
            writeChars(start, end, length, depth + 1);
        } else{
            arr.pop();
        }
    }
}

console.log(new Date());
console.log( "\n");

writeChars(0, 128, 5);
            console.log(str);

console.log(new Date());
console.log( "\n");
