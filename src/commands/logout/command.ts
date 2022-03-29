import { Command } from 'commander';
import { LogoutAction } from './action';

export const LogoutCommand = new Command('logout')
    .description('')
    .option('-d, --debug')
    .action(LogoutAction);
