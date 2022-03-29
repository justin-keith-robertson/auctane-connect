import { Command } from 'commander';
import { GetEnvironmentVariableAction } from './action';

export const GetEnvironmentVariableCommand = new Command('env:get')
    .description('Get an environment variable value for an app')
    .argument('<key>', 'The key used for the environment variable')
    .option('-d, --debug')
    .action(GetEnvironmentVariableAction);
