import { Math } from './Math';

describe('Testing math library', () => {

  beforeEach(() => {
    // executa antes de cada teste
  });

  afterEach(() => {
    // testa depois executa de cada teste
  });

  beforeAll(() => {
    // executa antes de todos os teste
  });

  afterAll(() => {
    // executa depois de todos os teste
  });

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

  it('contar quantos caracteres tem na string', () => {
    const response = "Romario";
    expect(response).toHaveLength(7);
  });

  it('se possui email', () => {
    const response = {
      name: 'Romario',
      email: 'romario@gmail.com'
    };
    expect(response).toHaveProperty('email');
  });

  it('se possui email', () => {
    const response = {
      name: 'Romario',
      email: 'romario@gmail.com'
    };
    expect(response).not.toBeUndefined();
  });

  it('se o numero e maior', () => {
    const response = 10;
    expect(response).toBeGreaterThan(10);
  });

  it('se possui email', () => {
    const response = Math.div(10, 0);
    expect(response).toThrow(new Error('Não divide por 0'));
  });
});