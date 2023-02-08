import { inject, injectable } from "inversify";
import { ILogger } from "../logger/logger.interface";
import { TYPES } from "../types";
import { IConfigService } from "./config.service.interface";
import 'reflect-metadata';
import { config, DotenvConfigOutput, DotenvParseOutput } from "dotenv";

@injectable()
export class ConfigService implements IConfigService {
  private config: DotenvParseOutput;

  constructor(
    @inject(TYPES.ILogger) private logger: ILogger
  ){
    const result: DotenvConfigOutput = config();
    if (result.error) {
      this.logger.error('[ConfigService] Env file is either missing or unavailable to read');
    } else {
      this.logger.log('[ConfigService] Config has successfully loaded');
      this.config = result.parsed as DotenvParseOutput;
    }
  }

  get(key: string): string {
    return this.config[key];
  }
}
