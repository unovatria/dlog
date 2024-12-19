import { ServerLogger } from './server';
import { ClientLogger } from './client';
import { BaseLogger } from './base';

export function initdlog(classNameOrFunction: string | Function): BaseLogger {
  
  const className = typeof classNameOrFunction === 'function' 
  ? classNameOrFunction.name 
  : classNameOrFunction;
  
  if (typeof window === 'undefined') {
    return new ServerLogger(className);
  }
  return new ClientLogger(className);
}
