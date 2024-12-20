'use client';

import { BaseLogger } from './base';
import { ColorScheme, DEFAULT_COLOR_SCHEMES, LogLevel } from './types-and-schemes';

export class ClientLogger extends BaseLogger {

  private colorSchemes: Record<LogLevel, ColorScheme> = DEFAULT_COLOR_SCHEMES;

  log(level: LogLevel, message: string, time?: boolean, error?: unknown): void {

    const colors = this.colorSchemes[level];

    // Create parts of the message with their respective styles
    const parts = [
      [`%c[${this.className}]`, `color: ${colors.className}`],
      [`%c[${level}]`, `color: ${colors.level}; font-weight: bold`],
      [`%c${message}`, `color: ${colors.message}`]
    ];

    if (time) parts.splice(0, 0, [`%c[${new Date().toISOString()}]`, `color: ${colors.timestamp}`]);

    // Separate the format string and styles
    const formatString = parts.map(part => part[0]).join(' ');
    const styles = parts.map(part => part[1]);

    // Log the message with all styles
    console.log(formatString, ...styles);

    // If there's an error, log the stack trace
    if (error instanceof Error) {
      console.error('Stack:', error.stack);
    }
  }

  logColored(message: string, customColors: Partial<ColorScheme>, time?: boolean): void {
    const colors = {
      ...customColors
    };

    const parts = [
      [`%c[${this.className}]`, `color: ${colors.className}`],
      [`%c${message}`, `color: ${colors.message}`]
    ];

    if (time) parts.splice(0, 0, [`%c[${new Date().toISOString()}]`, `color: ${colors.timestamp}`]);

    console.log(
      parts.map(part => part[0]).join(' '),
      ...parts.map(part => part[1])
    );
  }

  logWithBackground(message: string, bgColor: string, time?: boolean): void {

    let msg = `[${this.className}] ${message}`;
    if (time) msg = `[${new Date().toISOString()}] ${msg}`;

    console.log(
      `%c${msg}`,
      `background: ${bgColor}; color: white; padding: 2px 5px; border-radius: 3px;`
    );
  }

  logGradient(message: string, time?: boolean): void {
    const gradientStyle = 
      'background: linear-gradient(to right, #12c2e9, #c471ed, #f64f59); ' +
      '-webkit-background-clip: text; ' +
      '-webkit-text-fill-color: transparent; ' +
      'font-weight: bold;';

    let msg = `[${this.className}] ${message}`;
    if (time) msg = `[${new Date().toISOString()}] ${msg}`;

    console.log(`%c${msg}`, gradientStyle);
  }

  logBox(message: string, bgColor: string, time?: boolean): void {
    const boxStyle = `
      color: ${bgColor};
      background: #4B4E58;
      padding: 22px 55px;
      border-radius: 3px;
      border-left: 3px solid ${bgColor};
      font-weight: bold;
    `;

    let msg = `[${this.className}] ${message}`;
    if (time) msg = `[${new Date().toISOString()}] ${msg}`;

    console.log(`%c${msg}`, boxStyle);
  }

  logGroup(title: string, details: Record<string, unknown>, time?: boolean): void {
    const colors = this.colorSchemes["info"];

    let titleSet = `${title}`;
    if (time) titleSet = `[${new Date().toISOString()}] ${titleSet}`;

    console.group(`%c${titleSet}`, `color: ${colors.message}; font-weight: bold;`);
    console.log('%cDetails:', 'color: #666666');
    console.table(details);
    console.groupEnd();
  }

}
