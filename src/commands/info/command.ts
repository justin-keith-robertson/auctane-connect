import { Command } from 'commander';
import { InfoAction } from './action';

export const InfoCommand = new Command('info')
    .description('Get the current information about your app')
    .option('-d, --debug')
    .action(InfoAction);
