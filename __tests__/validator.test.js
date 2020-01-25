'use strict';

const validator = require('../lib/validator.js');
const personRules = require('../lib/object.js')

describe('validator module performs basic validation of', () => {
  


  // TODO: Make this series of tests less repetitive ... DRY it out

  let str = 'yes';
  let num = 1;
  let arr = ['a'];
  let obj = { x: 'y' };
  let func = () => { };
  let bool = false;
  
  let dataType = [str, num, arr, obj, func, bool]
  
  
  it('strings', () => {
    expect(validator.isString(str)).toBeTruthy();
    dataType.forEach(element => {
        if (element != str) {
            expect(validator.isString(element)).toBeFalsy();
        }
    });
  });

  it('numbers', () => {
    expect(validator.isNumber(num)).toBeTruthy();
    dataType.forEach(element => {
        if (element != num) {
            expect(validator.isNumber(element)).toBeFalsy();
        }
    });
  });

  it('arrays', () => {
    expect(validator.isArray(arr)).toBeTruthy();
    dataType.forEach(element => {
        if (element != arr) {
            expect(validator.isArray(element)).toBeFalsy();
        }
    });
  });

  it('objects', () => {
    expect(validator.isObject(obj)).toBeTruthy();
    dataType.forEach(element => {
        if (element != obj) {
            expect(validator.isObject(element)).toBeFalsy();
        }
    });

  });

  it('booleans', () => {
    expect(validator.isBoolean(bool)).toBeTruthy();
    dataType.forEach(element => {
        if (element != bool) {
            expect(validator.isBoolean(element)).toBeFalsy();
        }
    });
  });

  it('functions', () => {
    expect(validator.isFunction(func)).toBeTruthy();
    dataType.forEach(element => {
        if (element != func) {
            expect(validator.isFunction(element)).toBeFalsy();
        }
    });
  });

});




const susan = {
  id:'123-45-6789',
  name:'Susan McDeveloperson',
  age: 37,
  children:['Max', 'Vecky'],
  pet: 'catty'
};



describe('validator module performs complex validations', () => {

  it('validates the presence of required object properties at any level', () => {
    // i.e. does person.hair.color exist and have a good value, not just person.hair
    expect(Object.keys(susan)).toEqual(Object.keys(personRules.fields));
  });

  it('validates the proper types of object properties', () => {
    // i.e. person.name must be a string, etc.
    expect(typeof(susan.id)).toEqual(personRules.fields.id.type);
    expect(typeof(susan.name)).toEqual(personRules.fields.name.type);
    expect(typeof(susan.age)).toEqual(personRules.fields.age.type);

  });

  it('validates the types of values contained in an array', () => {
    // i.e. an array of all strings or numbers
    susan.children.forEach(kid => {
      expect(typeof(kid)).toEqual(personRules.fields.children.valueType)
    })
  });

  it('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    expect(susan.pet).toBeTruthy
  });

  // TODO: Cover so, so many more cases

});
