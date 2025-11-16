import { describe, it, expect } from 'vitest';
import { checkHealth } from '../../src/shared/health';

describe('checkHealth', () => {
  it('should return ok status', () => {
    const result = checkHealth();
    expect(result.status).toBe('ok');
  });

  it('should return a valid timestamp', () => {
    const result = checkHealth();
    expect(result.timestamp).toBeDefined();
    expect(() => new Date(result.timestamp)).not.toThrow();
  });

  it('should return an object with status and timestamp', () => {
    const result = checkHealth();
    expect(result).toHaveProperty('status');
    expect(result).toHaveProperty('timestamp');
  });
});
