import { Command } from 'commander';
import { LoginAction } from './action';

export const LoginCommand = new Command('login')
    .description('Login with your connect API key')
    .option('-d, --debug')
    .action(LoginAction);
