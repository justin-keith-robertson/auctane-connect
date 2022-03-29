import { Command } from 'commander';
import { TestAction } from './action';

export const TestCommand = new Command('test')
    .description('')
    .option('-d, --debug')
    .action(TestAction);
