import { CommandArguments } from '../../command-arguments';

export const GetEnvironmentVariableAction = (
    key: string,
    args: CommandArguments,
) => {
    console.log(key, args.debug);
};
