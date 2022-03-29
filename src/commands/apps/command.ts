import { Command } from 'commander';
import { AppsAction } from './action';

export const AppsCommand = new Command('apps')
    .description('')
    .option('-d, --debug')
    .action(AppsAction);
