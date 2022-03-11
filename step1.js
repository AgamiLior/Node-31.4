const fs = require('fs');
const process = require('process');

function cat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(`Error reading ${path}:, ${err}`)
            process.kill(1)
        }
        console.log(data)
});
}
console.log(process.argv[2])
cat(process.argv[2])