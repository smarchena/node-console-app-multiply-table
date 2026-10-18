import fs from 'fs';

const base: number = 5;
const title: string = (`====================\n    Tabla del ${base}    \n====================\n\n`);
let table: string = '';

for (let i: number = 1; i <= 9; i++) {
    table += `${base} x ${i} = ${base * i}\n`;
}

table = title + table;
console.log(table);

const outputPath = 'outputs';

fs.mkdirSync(outputPath, {recursive: true});
fs.writeFileSync(`${outputPath}/table-${base}.txt`, `\n${table}`)

console.log('*** File created! ***');
