import { Command } from 'commander';
import { StartAction } from './action';

export const StartCommand = new Command('start')
    .description('')
    .option('-d, --debug')
    .action(StartAction);
