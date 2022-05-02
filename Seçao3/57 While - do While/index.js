function numeroAleatório(min, max) {
    const r = Math.random() * (max - min) + min;
    /* console.log(r); */
    return Math.floor(r);
}

const min = 1
const max = 50

let random = 10 //numeroAleatório(min, max)


//enquanto
while (random !== 10) {
    random = numeroAleatório(min, max)
    console.log(random)

}

console.log('########');

do {
    random = numeroAleatório(min, max)
    console.log(random)
} while (random !== 10);