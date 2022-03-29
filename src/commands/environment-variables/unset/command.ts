import { Command } from 'commander';
import { UnsetEnvironmentVariableAction } from './action';

export const UnsetEnvironmentVariableCommand = new Command('env:unset')
    .description('Unset (delete) environment variables from an app')
    .option('-d, --debug')
    .action(UnsetEnvironmentVariableAction);
