import { Command } from 'commander';
import { InitAction } from './action';

export const InitCommand = new Command('init')
    .description('Create a new package to develop a new Connect App.')
    .option('-d, --debug')
    .action(InitAction);
