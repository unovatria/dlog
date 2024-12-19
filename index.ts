import { initdlog } from './src/factory';

// Create a default instance with a default class name
const dlog = initdlog('dLog');

// Export the pre-initialized instance as default
export default dlog;

// Also export the factory function
export { initdlog };
