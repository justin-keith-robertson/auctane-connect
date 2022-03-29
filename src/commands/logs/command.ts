import { Command } from 'commander';
import { LogsAction } from './action';

export const LogsCommand = new Command('logs')
    .description('Get the logs for your app')
    .option('-d, --debug')
    .action(LogsAction);
