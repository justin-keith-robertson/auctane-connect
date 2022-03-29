import { Command } from 'commander';
import { VersionAction } from './action';

export const VersionCommand = new Command('version')
    .description('Displays the current version of the CLI.')
    .option('-d, --debug')
    .action(VersionAction);
