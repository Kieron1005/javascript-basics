const {
  testingClass
} = require('../class');

describe('sayHello', () => {
  xit('returns "Hello world!" when passed "world"', () => {
    const obj = new testingClass('world');
    expect(obj.sayHello()).toEqual('Hello, world!');
  });

  xit('returns "Hello MCR Codes!" when passed "MCR Codes"', () => {
    const obj = new testingClass('MCR Codes');
    expect(obj.sayHello()).toEqual('Hello, MCR Codes!');
  });

  xit('returns "Hello fsghjdfkhgf!" when passed "fsghjdfkhgf"', () => {
    const obj = new testingClass('fsghjdfkhgf');
    expect(obj.sayHello()).toEqual('Hello, fsghjdfkhgf!');
  });
});

describe('uppercase', () => {
  xit('returns the uppercased string', () => {
    const obj1 = new testingClass('abc');
    expect(obj1.uppercase()).toEqual('ABC');
    const obj2 = new testingClass('def');
    expect(obj2.uppercase()).toEqual('DEF');
    const obj3 = new testingClass('ghi');
    expect(obj3.uppercase()).toEqual('GHI');
  });
});

describe('lowercase', () => {
  xit('returns the lowercased string', () => {
    const obj1 = new testingClass('ABC');
    expect(obj1.uppercase()).toEqual('abc');
    const obj2 = new testingClass('dEf');
    expect(obj2.uppercase()).toEqual('def');
    const obj3 = new testingClass('GHi');
    expect(obj3.uppercase()).toEqual('ghi');
  });
});

describe('countCharacters', () => {
  xit('returns the number of characters in the string', () => {
    const obj1 = new testingClass('fsfsgsfdg');
    const obj2 = new testingClass('fsfsg');
    const obj3 = new testingClass('');

    expect(obj1.countCharacters()).toEqual(9);
    expect(obj2.countCharacters()).toEqual(5);
    expect(obj3.countCharacters()).toEqual(0);
  });
});

describe('firstCharacter', () => {
  xit('returns the first character of the string', () => {
    const obj1 = new testingClass('ABC');
    const obj2 = new testingClass('dEf');
    const obj3 = new testingClass('GHi');
    expect(obj1.firstCharacter()).toEqual('A');
    expect(obj2.firstCharacter()).toEqual('d');
    expect(obj3.firstCharacter()).toEqual('G');
  });
});

describe('firstCharacters', () => {
  xit('returns the first 4 characters of the string', () => {
    const obj1 = new testingClass('sd32fg45');
    expect(obj1.firstCharacters(4)).toEqual('sd32');
    expect(obj1.firstCharacters(2)).toEqual('sd');
  });

  xit('returns the first 2 characters of the string', () => {
    const obj1 = new testingClass('asd');
    expect(obj1.firstCharacters(2)).toEqual('as');
  });
});
