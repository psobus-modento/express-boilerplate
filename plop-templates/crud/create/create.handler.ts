import { CommandHandler } from "@tshio/command-bus";
import { Logger } from "@tshio/logger";
import { Repository } from "typeorm";
import { CREATE_{{constantCase name}}_COMMAND_TYPE, Create{{pascalCase name}}Command } from "../commands/create-{{kebabCase name}}.command";
import { {{pascalCase name}}Model } from "../models/{{kebabCase name}}.model";

export interface Create{{pascalCase name}}HandlerDependencies {
  logger: Logger;
  {{camelCase name}}Repository: Repository<{{pascalCase name}}Model>;
}

export default class Create{{pascalCase name}}Handler implements CommandHandler<Create{{pascalCase name}}Command> {
  public commandType: string = CREATE_{{constantCase name}}_COMMAND_TYPE;

  constructor(private dependencies: Create{{pascalCase name}}HandlerDependencies) {}

  async execute(command: Create{{pascalCase name}}Command) {
    const {{camelCase name}}Model = await this.dependencies.{{camelCase name}}Repository.save(command.payload);

    return {
      result: {{camelCase name}}Model,
    };
  }
}
