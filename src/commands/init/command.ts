import { Command, Option } from 'commander';
import { PluginType, ProjectFileType } from '../../core';
import { CommandArguments } from '../command-arguments';
import { InitAction } from './action';

export interface InitArguments extends CommandArguments {
    skip?: boolean;
    name?: string;
    fileType?: ProjectFileType;
    pluginType?: PluginType;
}

const fileType = new Option(
    '-f, --file-type <value>',
    'The type of project you want your plugin to be scaffolded in',
).choices(Object.values(ProjectFileType));

const pluginType = new Option(
    '-p, --plugin-type <value>',
    'The type of auctane plugin you are building',
).choices(Object.values(PluginType));

export const InitCommand = new Command('init')
    .description('Create a new package to develop a new Connect App.')
    .option('-d, --debug')
    .option(
        '-s, --skip',
        'Skip the questionaire, must provide --file-type, --plugin-type, and --name',
    )
    .option('-n, --name <value>', 'The name of the project')
    .addOption(fileType)
    .addOption(pluginType)
    .action(InitAction);
