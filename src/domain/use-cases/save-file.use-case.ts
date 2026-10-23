import fs from 'fs'; 
import { yarg } from '../../config/plugins/yargs.plugin.js';

const {b: base} = yarg;

export interface SaveFileUseCase {
    execute: (options: Options) => boolean;
}

export interface Options {
    fileContent: string;
    fileDestination?: string;
    fileName?: string;
}

export class SaveFile implements SaveFileUseCase {

    constructor(
        /* repository: StorageRepository */
    ) { }

    execute({
        fileContent,
        fileDestination = 'outputs',
        fileName = 'table'
    }: Options): boolean {

        try {
            fs.mkdirSync(fileDestination, { recursive: true });

            fs.writeFileSync(`${fileDestination}/${fileName}_${base}.txt`, fileContent);            
            return true;

        } catch (error) {
            console.log(error);
            return false;
        }
    }
}