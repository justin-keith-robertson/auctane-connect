import { Command } from 'commander';
import { LoginAction } from './action';

export const LoginCommand = new Command('login')
    .description('')
    .option('-d, --debug')
    .action(LoginAction);
