# DLog

A dual-environment logger that automatically switches between server and client logging.

- Supports Typescript.

## Installation

```bash
npm install dlog
```

## Usage

**Usage 1** (Only import and use with default class name (dLog))

```typescript
// Use directly
import dlog from 'dlog';

dlog.info('Hello World');

dlog.info('Hello World', true); // true bool adds timestamp ourput to log.
```

**Usage 2** (Import and init with custom class name (can be direct class name or string))

```typescript
// custom instance with different class name
import { initdlog } from 'dlog';

const dlog = initdlog('MyCustomClass');
dlog.info('Custom logger message');

dlog.info('Custom logger message', true); // true bool adds timestamp ourput to log.
```

## DLog types:

- Standard logging with multi-color
  `dlog.info('Standart info log 🚀🚀🚀');`
  `dlog.warn('Standart warning log');`
  `dlog.error('Standart error log');`

- Custom colored message usages:
  `dlog.logColored('Custom colored log message', { message: '#8e44ad', className: '#F5eead'  });`

  
- Background colored log message usage:
  `dlog.logWithBackground('Log message with background', '#2ecc71');`

- Gradient message usage:
  `dlog.logGradient('Gradient colored log message 01234567890123456789012345678901234567890');`

- Boxed message usage:
  `dlog.logBox('Info log in a box', '#2ecc71');`
  
- Log group usage:
  `dlog.logGroup('Log group message', {  action: 'click',  element: 'button',  });`