'use strict'


const personRules = {
    fields: {
      id: {type: 'string', required: true},
      name: {type: 'string', required: true},
      age: {type: 'number', required: true},
      children: { type: 'array', valueType: 'string' },
      pet: {type:'string'}
    },
  };

  module.exports = personRules;