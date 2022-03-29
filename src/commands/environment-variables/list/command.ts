import { Command } from 'commander';
import { ListEnvironmentVariableAction } from './action';

export const ListEnvironmentVariableCommand = new Command('env:list')
    .description('List environment variables for an app')
    .option('-d, --debug')
    .action(ListEnvironmentVariableAction);
