import { CommandArguments } from '../../command-arguments';

export const SetEnvironmentVariableAction = (
    values: string[],
    args: CommandArguments,
) => {
    console.log(values, args);
};
