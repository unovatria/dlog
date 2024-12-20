export type LogLevel = 'info' | 'warn' | 'error';

export type ColorScheme = {
  timestamp: string;
  level: string;
  className: string;
  message: string;
};

export const DEFAULT_COLOR_SCHEMES: { [key in LogLevel]: ColorScheme } = {
  info: {
    timestamp: '#666666',
    level: '#0066cc',
    className: '#009688',
    message: '#FFFFFF'
  },
  warn: {
    timestamp: '#666666',
    level: '#ff9900',
    className: '#009688',
    message: '#ff9900'
  },
  error: {
    timestamp: '#666666',
    level: '#cc0000',
    className: '#009688',
    message: '#cc0000'
  }
} as const;