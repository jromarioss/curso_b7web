import { Math } from './Math';

describe('Testing math library', () => {
  it('should sum two numbers correctly', () => {
    const response = Math.sum(5, 10);
    expect(response).toBe(15);
  });
  
  it('should sub two numbers correctly', () => {
    const response = Math.sub(10, 5);
    expect(response).toBe(5);
  });
  
  it('should div two numbers correctly', () => {
    const response = Math.div(10, 5);
    expect(response).toBe(2);
  
    const response2 = Math.div(0, 3);
    expect(response2).toBe(false);
  });
  
  it('should mult two numbers correctly', () => {
    const response = Math.mult(2, 2);
    expect(response).toBe(4);
  });
});