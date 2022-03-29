import { Command } from 'commander';
import { PublishAction } from './action';

export const PublishCommand = new Command('publish')
    .description('')
    .option('-d, --debug')
    .action(PublishAction);
