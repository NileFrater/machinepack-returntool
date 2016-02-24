module.exports = {

  friendlyName: 'Return Object',
  description: 'Return an Object varible generated earlier in the circuit.',
  extendedDescription: 'This experimental tool was created to handled the occasional occurence of generating a variable in one machine, working with it in other machines, and then wishing to output the variable at the end of a custom machine circuit without having to regenerate the variable.',
  
  inputs: {
    variable: {
      example: '*',
      description: 'The variable you wish the machine to output.',
      required: true
    }

  },

  defaultExit: 'success',

  exits: {
    error: {
      description: 'An unexpected error occurred.'
    },
    success: {
      example: '*',
      description: 'Then'
    }
  },

  fn: function (inputs, exits) {

    return exits.success(inputs.variable);

  }

};
