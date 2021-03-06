import { program } from 'commander';
import {
    AccountsCommand,
    AppsCommand,
    InfoCommand,
    InitCommand,
    LoginCommand,
    LogoutCommand,
    LogsCommand,
    PackCommand,
    PublishCommand,
    StartCommand,
    TestCommand,
    VersionCommand,
    WhoAmICommand,
    GetEnvironmentVariableCommand,
    ListEnvironmentVariableCommand,
    SetEnvironmentVariableCommand,
    UnsetEnvironmentVariableCommand,
} from './commands';
const manifest = require('../package.json') as any;

program
    .name('auctane-connect')
    .description(manifest.description)
    .version(manifest.version);

program.commands.push(
    AccountsCommand,
    AppsCommand,
    InfoCommand,
    InitCommand,
    LoginCommand,
    LogoutCommand,
    LogsCommand,
    PackCommand,
    PublishCommand,
    StartCommand,
    TestCommand,
    VersionCommand,
    WhoAmICommand,
    GetEnvironmentVariableCommand,
    ListEnvironmentVariableCommand,
    SetEnvironmentVariableCommand,
    UnsetEnvironmentVariableCommand,
);

program.parse();
