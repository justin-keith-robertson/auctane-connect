import { Command } from 'commander';
import { SetEnvironmentVariableAction } from './action';

export const SetEnvironmentVariableCommand = new Command('env:set')
    .description('Set environment variables for an app')
    .option('-d, --debug')
    .action(SetEnvironmentVariableAction);
