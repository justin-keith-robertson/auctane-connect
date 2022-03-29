import { Command } from 'commander';
import { LogoutAction } from './action';

export const LogoutCommand = new Command('logout')
    .description('Clears the local connect API key')
    .option('-d, --debug')
    .action(LogoutAction);
