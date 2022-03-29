import { Command } from 'commander';
import { InfoAction } from './action';

export const InfoCommand = new Command('info')
    .description('')
    .option('-d, --debug')
    .action(InfoAction);
