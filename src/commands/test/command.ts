import { Command } from 'commander';
import { TestAction } from './action';

export const TestCommand = new Command('test')
    .description('Test your app definition')
    .option('-d, --debug')
    .action(TestAction);
