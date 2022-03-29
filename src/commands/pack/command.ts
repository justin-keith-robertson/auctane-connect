import { Command } from 'commander';
import { PackAction } from './action';

export const PackCommand = new Command('pack')
    .description('')
    .option('-d, --debug')
    .action(PackAction);
