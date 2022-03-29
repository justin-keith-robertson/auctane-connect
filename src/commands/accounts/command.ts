import { Command } from 'commander';
import { AccountsAction } from './action';

export const AccountsCommand = new Command('accounts')
    .description('')
    .option('-d, --debug')
    .action(AccountsAction);
