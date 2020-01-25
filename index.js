'use strict';

const validator = require('./lib/validator.js');

// This Code given from Mr. Brian

validator.isValid = (schema, data) => {
    let valid = true;
    for (let fieldName in schema.fields) {
        let field = schema.fields[fieldName];
        // Am I required and set?
        let required = field.required
            ? validator.isTruthy(data[fieldName])
            : true;
        // Am I the right type (if we even care)
        let type = field.type
            ? validator.correctType(data[fieldName], field)
            : true;
        // If anything is false ...
        if (!(required && type)) {
            valid = false;
        }
    }
    return valid;
};

const personRules = {
    fields: {
        id: { type: 'string', required: true },
        name: { type: 'string', required: true },
        age: { type: 'number', required: true },
        children: { type: 'array', valueType: 'string' },
    },
};

const susan = {
    id: '123-45-6789',
    name: 'Susan McDeveloperson',
    age: 37,
    children: [],
};

const fred = {
    id: 38,
    name: 'Freddy McCoder',
    children: [],
};

console.log('susan', validator.isValid(personRules, susan));
console.log('fred', validator.isValid(personRules, fred));