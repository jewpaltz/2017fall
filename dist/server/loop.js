var str = "";
console.log(new Date());
console.log("\n\n");
for (var x = 0; x < 10; x++) {
    for (var i = 0; i < 256; i++) {
        var chr = String.fromCharCode(i);
        str += chr;
        if (i % 64 == 0)
            str += "\n\n";
    }
}
console.log(str);
console.log(new Date());
console.log("\n\n");
//# sourceMappingURL=loop.js.map