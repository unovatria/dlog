[![Publish to NPM](https://github.com/unovatria/lelog/actions/workflows/publish.yml/badge.svg)](https://github.com/unovatria/lelog/actions/workflows/publish.yml)

# LELOG - lelog

A dual-environment logger that automatically switches between server and client logging.

- Supports Typescript.

## Installation

```bash
npm i lelog
or
npm install lelog
```

## Usage

**Usage 1** (Only import and use with default class name (lelog))

```typescript
// Use directly
import lelog from 'lelog';

lelog.info('Hello World');

lelog.info('Hello World', true); // true bool adds timestamp output to log.
```

**Usage 2** (Import and init with custom class name (can be direct class name or string))

```typescript
// custom instance with different class name
import { lelog } from 'lelog';

const lelog = lelog('MyCustomClass');
lelog.info('Custom logger message');

lelog.info('Custom logger message', true); // true bool adds timestamp output to log.
```

## lelog types:

- Standard logging with multi-color
  
  `lelog.info('Standart info log 🚀🚀🚀');`
  
  `lelog.warn('Standart warning log');`
  
  `lelog.error('Standart error log');`
- Custom colored message usages:
  
  `lelog.logColored('Custom colored log message', { message: '#8e44ad', className: '#F5eead'  });`
- Background colored log message usage:
  
  `lelog.logWithBackground('Log message with background', '#2ecc71');`
- Gradient message usage:
  
  `lelog.logGradient('Gradient colored log message 01234567890123456789012345678901234567890');`
- Boxed message usage:
  
  `lelog.logBox('Info log in a box', '#2ecc71');`
- Log group usage:
  
  `lelog.logGroup('Log group message', {  action: 'click',  element: 'button',  });`

## Showcase & Usage examples:

(browser console)

![image](https://github.com/user-attachments/assets/70745c1c-60c5-456b-8dbf-e2b18750b76a)

(nodejs - middleware.ts - terminal)

![image](https://github.com/user-attachments/assets/39438bed-b653-46b6-8ba2-1f6277b3476b)

(with time bool true (that bool is optional if not entered "false" will be default))

![image](https://github.com/user-attachments/assets/3ae9ab78-8e76-4905-9033-adaff3fb7ace)


