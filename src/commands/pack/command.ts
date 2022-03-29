import { Command } from 'commander';
import { PackAction } from './action';

export const PackCommand = new Command('pack')
    .description('Package your app')
    .option('-d, --debug')
    .action(PackAction);
