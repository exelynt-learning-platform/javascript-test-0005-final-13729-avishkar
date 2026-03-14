let num = 1;
let rows = 5;

for (let i = 1; i <= rows; i++) {
    let output = "";

    for (let j = 1; j <= i; j++) {
        output += num + " ";
        num++;
    }

    console.log(output.trim());
}
