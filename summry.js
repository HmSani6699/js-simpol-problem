
var selektet = []
for (var i = 0; i < 10; i++) {
    const rendo = Math.random() * 100;
    const runded = Math.round(rendo);
    console.log(runded);
    if (selektet.indexOf(runded) == -1) {
        selektet.push(runded);
    }
    else {
        console.log(runded);
    }
}
console.log(selektet);