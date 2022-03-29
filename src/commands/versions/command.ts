import { Command } from 'commander';
import { VersionAction } from './action';

export const VersionCommand = new Command('version')
    .description('')
    .option('-d, --debug')
    .action(VersionAction);
