import { LogLevel } from './types-and-schemes';
import { BaseLogger } from './base';

export class ServerLogger extends BaseLogger {

  log(level: LogLevel, message: string, time?: boolean, error?: unknown): void {
    
    const timestamp = new Date().toISOString();

    let msg = `[${this.className}] [${level}] ${message}`
    if (time) msg = `[${timestamp}] ${msg}`

    switch (level) {
      case 'info':
        try {
          if (typeof process !== 'undefined' && process.stdout?.write) {
            process.stdout.write(`${msg}\n`);
          } else {
            console.log(msg);
          }
        } catch {
          throw new Error('"Info" error in logging' + msg);
        }
        break;
      case 'warn':
        try {
          if (typeof process !== 'undefined' && process.stderr?.write) {
            process.stderr.write(`${msg} ⚠️\n`);
          } else {
            console.warn(msg, '⚠️');
          }
        } catch {
          throw new Error('"Warn" error in logging' + msg + '⚠️');
        }
        break;
      case 'error':
        try {
          if (typeof process !== 'undefined' && process.stderr?.write) {
            process.stderr.write(`${msg} 🔴\n`);
            if (error instanceof Error) {
              process.stderr.write(`Stack: ${error.stack}\n`);
            }
          } else {
            console.error(msg, '🔴');
            if (error instanceof Error) {
              console.error('Stack:', error.stack);
            }
          }
        } catch {
          throw new Error('"Error" error in logging' + msg + '🔴');
        }
        break;
    }
  }

  logBox(): void { return; }
  logGradient(): void { return; }
  logColored(): void { return; }
  logGroup(): void { return; }
  logWithBackground(): void { return; }

}