import { Command } from 'commander';
import { SetEnvironmentVariableAction } from './action';

export const SetEnvironmentVariableCommand = new Command('env:set')
    .description('Set environment variables for an app')
    .argument(
        '<values...>',
        'A series of space separated key value pairs. Example: key=2fe34 url=http://website.com',
    )
    .option('-d, --debug')
    .action(SetEnvironmentVariableAction);
