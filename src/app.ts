import { yarg } from "./config/plugins/yargs.plugin.js";
import { ServerApp } from "./presentation/server.app.js";

// console.log(process.argv);

// console.log(yarg.b)

(async () => { // función asíncrona anónima autoinvoacada    
    await main();
    // console.log('Fin de programa.');
})();

async function main() {
    // console.log('Main ejecutado');
    const { b: base, l: limit, s: showTable } = yarg;
    ServerApp.run({ base, limit, showTable });
}