import { PrismaClient, UserModel } from "@prisma/client";
import { inject, injectable } from "inversify";
import { ILogger } from "../logger/logger.interface";
import { TYPES } from "../types";

@injectable()
export class PrismaService {
  client: PrismaClient;

  constructor(
    @inject(TYPES.ILogger) private logger: ILogger
  ) {
    this.client = new PrismaClient()
  }

  async connect(): Promise<void> {
    try {
      this.client.$connect();
      this.logger.log('[PrismaService] connected to DB');
    } catch (error) {
      this.logger.error('[PrismaService] failed to connect');
    }
  }

  async disconnect(): Promise<void> {
    this.client.$disconnect();
  }
}