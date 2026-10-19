import { yarg } from "./config/plugins/yargs.plugin.js";

// console.log(process.argv);

// console.log(yarg.b)

(async () => { // función asíncrona anónima autoinvoacada    
    await main();
    // console.log('Fin de programa.');
})();

async function main() {
    // console.log('Main ejecutado');

    console.log(yarg)
}