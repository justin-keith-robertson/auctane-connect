import { Command } from 'commander';
import { WhoAmIAction } from './action';

export const WhoAmICommand = new Command('whoami')
    .description('Display the current logged in user')
    .option('-d, --debug')
    .action(WhoAmIAction);
