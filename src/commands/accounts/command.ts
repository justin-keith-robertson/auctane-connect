import { Command } from 'commander';
import { AccountsAction } from './action';

export const AccountsCommand = new Command('accounts')
    .description('Lists or creates testing accounts')
    .option('-d, --debug')
    .action(AccountsAction);
