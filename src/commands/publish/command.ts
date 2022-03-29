import { Command } from 'commander';
import { PublishAction } from './action';

export const PublishCommand = new Command('publish')
    .description('Packages and publishes your app to the development server')
    .option('-d, --debug')
    .action(PublishAction);
