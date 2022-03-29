import { Command } from 'commander';
import { StartAction } from './action';

export const StartCommand = new Command('start')
    .description('Start your app locally')
    .option('-d, --debug')
    .action(StartAction);
