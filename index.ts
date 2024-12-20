import { initlelog } from './src/factory';

// Create a default instance with a default class name
const lelog = initlelog('leLog');

// Export the pre-initialized instance as default
export default lelog;

// Also export the factory function
export { initlelog };
