let auto = []
console.log(auto)
function blingers() { if (auto.indexOf(1) == -1) {
    let numeroRandomico = Math.floor(Math.random() * 10) + 1;
    auto.push(numeroRandomico)
    console.log(auto)
    blingers()
} else {
    console.log(`fim`)
}
}
blingers()
