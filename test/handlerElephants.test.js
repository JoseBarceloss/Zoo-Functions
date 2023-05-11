const handlerElephants = require('../src/handlerElephants');

describe('Testes da função handlerElephants', () => {
  test('Deve retornar o nome dos elefantes', () => {
    const result = handlerElephants('names');
    expect(result).toEqual(expect.any(Array));
    expect(result.length).toBeGreaterThan(0);
  });

  test('Deve retornar a quantidade de elefantes', () => {
    const result = handlerElephants('count');
    expect(result).toEqual(expect.any(Number));
  });

  test('Deve retornar a idade média dos elefantes', () => {
    const result = handlerElephants('averageAge');
    expect(result).toEqual(expect.any(Number));
  });

  test('Deve retornar null para um parâmetro inválido', () => {
    const result = handlerElephants('invalidParam');
    expect(result).toBeNull();
  });

  test('Deve retornar uma mensagem de erro para um parâmetro inválido', () => {
    const result = handlerElephants(123);
    expect(result).toBe('Parâmetro inválido, é necessário uma string');
  });

  test('Deve retornar undefined para um parâmetro não fornecido', () => {
    const result = handlerElephants();
    expect(result).toBeUndefined();
  });

  test('Deve retornar o número inteiro 4 para o argumento "count"', () => {
    const result = handlerElephants('count');
    expect(result).toEqual(4);
  });

  test('Deve retornar um array de nomes que contém o nome Jefferson para o argumento "names"', () => {
    const result = handlerElephants('names');
    expect(result).toContain('Jefferson');
  });

  test('Deve retornar um número próximo a 10.5 para o argumento "averageAge"', () => {
    const result = handlerElephants('averageAge');
    expect(result).toBeCloseTo(10.5, 1);
  });

  test('Deve retornar null para o argumento "invalidArg"', () => {
    const result = handlerElephants('invalidArg');
    expect(result).toBeNull();
  });

  test('Deve retornar undefined quando nenhum argumento é passado', () => {
    const result = handlerElephants();
    expect(result).toBeUndefined();
  });
});
