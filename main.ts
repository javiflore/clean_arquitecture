import { checkHealth } from './src/shared/health';

const health = checkHealth();
console.log("Health Status:", health.status);
console.log("Timestamp:", health.timestamp);