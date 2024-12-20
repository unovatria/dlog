import { LogLevel } from "./types-and-schemes";

export abstract class BaseLogger {

  protected className: string;

  constructor(className: string) {
    this.className = className;
  }

  abstract log(level: LogLevel, message: string, time?: boolean, error?: unknown): void;
  abstract logColored(message: string, customColors: unknown, time?: boolean): void;
  abstract logWithBackground(message: string, bgColor: string, time?: boolean): void;
  abstract logGradient(message: string, time?: boolean): void;
  abstract logBox(message: string, boxColor: string, time?: boolean): void;
  abstract logGroup(title: string, details: Record<string, unknown>, time?: boolean): void;

  public info(message: string, time?: boolean) {
    this.log('info', message, time);
    return;
  }

  public warn(message: string, time?: boolean) {
    this.log('warn', message, time);
    return;
  }

  public error(message: string, time?: boolean, error?: unknown) {
    this.log('error', message, time, error);
    return;
  }

  public async withTry<T>(
    operation: () => Promise<T> | T,
    time = true,
    errorMessage = 'Operation failed'
  ): Promise<T | undefined> {
    try {
      const result = await operation();
      return result;
    } catch (error) {
      this.error(errorMessage, time, error);
      return undefined;
    }
  }
}