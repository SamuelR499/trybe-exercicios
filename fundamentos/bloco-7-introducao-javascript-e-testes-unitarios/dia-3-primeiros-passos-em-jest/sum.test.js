const { sum, myRemove, myFizzBuzz } = require('./sum');

describe('Testes em realaçào a funçào sum', () => {

  it('Verificar se  4 + 5 = 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('Verificar se  0 + 0 = 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it(`Resposta de erro com valor não númerico`, () => {
    expect(() => {
      sum(4, '5');
    }).toThrow('parameters must be numbers');
  });

  it('Verificar se não é número', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow('parameters must be numbers')
  });
});

describe('Testes de myRemove', () => {
  it(`myRemove([1, 2, 3, 4], 3) retorna [1, 2, 4]`, () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it(`myRemove([1, 2, 3, 4], 3) não retorna [1, 2, 3, 4]`, () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it(`myRemove([1, 2, 3, 4], 5) retorna [1, 2, 4]`, () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('teste function myFizzBuzz :)',()=>{





})
