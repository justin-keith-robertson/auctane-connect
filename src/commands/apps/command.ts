import { Command } from 'commander';
import { AppsAction } from './action';

export const AppsCommand = new Command('apps')
    .description('List your apps')
    .option('-d, --debug')
    .action(AppsAction);
