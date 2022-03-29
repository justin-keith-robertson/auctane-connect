import { Command } from 'commander';
import { InitAction } from './action';

export const InitCommand = new Command('init')
    .description('')
    .option('-d, --debug')
    .action(InitAction);
