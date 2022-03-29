import { Command } from 'commander';
import { LogsAction } from './action';

export const LogsCommand = new Command('logs')
    .description('')
    .option('-d, --debug')
    .action(LogsAction);
