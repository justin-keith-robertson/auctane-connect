import { Command } from 'commander';
import { WhoAmIAction } from './action';

export const WhoAmICommand = new Command('whoami')
    .description('')
    .option('-d, --debug')
    .action(WhoAmIAction);
