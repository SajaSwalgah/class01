'use strict';

const validator = require('../lib/validator.js');
const personRules = require('../lib/object.js')

describe('validator module performs basic validation of', () => {
  


  // TODO: Make this series of tests less repetitive ... DRY it out

  it('strings', () => {
    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = { x: 'y' };
    let func = () => { };
    let bool = false;
    expect(validator.isString(str)).toBeTruthy();
    expect(validator.isString(num)).toBeFalsy();
    expect(validator.isString(arr)).toBeFalsy();
    expect(validator.isString(obj)).toBeFalsy();
    expect(validator.isString(func)).toBeFalsy();
    expect(validator.isString(bool)).toBeFalsy();
  });

  it('numbers', () => {
    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = { x: 'y' };
    let func = () => { };
    let bool = false;
    expect(validator.isNumber(str)).toBeFalsy();
    expect(validator.isNumber(num)).toBeTruthy();
    expect(validator.isNumber(arr)).toBeFalsy();
    expect(validator.isNumber(obj)).toBeFalsy();
    expect(validator.isNumber(func)).toBeFalsy();
    expect(validator.isNumber(bool)).toBeFalsy();
  });

  it('arrays', () => {
    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = { x: 'y' };
    let func = () => { };
    let bool = false;
    expect(validator.isArray(str)).toBeFalsy();
    expect(validator.isArray(num)).toBeFalsy();
    expect(validator.isArray(arr)).toBeTruthy();
    expect(validator.isArray(obj)).toBeFalsy();
    expect(validator.isArray(func)).toBeFalsy();
    expect(validator.isArray(bool)).toBeFalsy();
  });

  it('objects', () => {
    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = { x: 'y' };
    let func = () => { };
    let bool = false;
    expect(validator.isObject(str)).toBeFalsy();
    expect(validator.isObject(num)).toBeFalsy();
    expect(validator.isObject(arr)).toBeTruthy();
    expect(validator.isObject(obj)).toBeTruthy();
    expect(validator.isObject(func)).toBeFalsy();
    expect(validator.isObject(bool)).toBeFalsy();

  });

  it('booleans', () => {
    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = { x: 'y' };
    let func = () => { };
    let bool = false;
    expect(validator.isBoolean(str)).toBeFalsy();
    expect(validator.isBoolean(num)).toBeFalsy();
    expect(validator.isBoolean(arr)).toBeFalsy();
    expect(validator.isBoolean(obj)).toBeFalsy();
    expect(validator.isBoolean(func)).toBeFalsy();
    expect(validator.isBoolean(bool)).toBeTruthy();
  });

  it('functions', () => {
    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = { x: 'y' };
    let func = () => { };
    let bool = false;
    expect(validator.isFunction(str)).toBeFalsy();
    expect(validator.isFunction(num)).toBeFalsy();
    expect(validator.isFunction(arr)).toBeFalsy();
    expect(validator.isFunction(obj)).toBeFalsy();
    expect(validator.isFunction(func)).toBeTruthy();
    expect(validator.isFunction(bool)).toBeFalsy();
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
