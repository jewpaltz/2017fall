let str = "";


function writeChars(start, end, length, depth = 0){
    for (let i = start; i < end; i++) {
        str += String.fromCharCode(i + 65);
        if(length > depth){
            writeChars(start, end, length, depth + 1);
        } if(depth == 0){
            str += "\n";
        }
    }
}

console.log(new Date());
console.log( "\n");

writeChars(0, 3, 3);
            console.log(str);

console.log(new Date());
console.log( "\n");
